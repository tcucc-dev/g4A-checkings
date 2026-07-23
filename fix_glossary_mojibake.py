"""Fix mojibake entries in glossary.js — double-UTF-8 encoded Chinese strings.

The bug: A previous tool read a Chinese glossary file as Latin-1 (cp1252) and
re-encoded as UTF-8. Result: each Chinese char became 3 chars where the original
3 bytes got interpreted as 3 separate Latin-1 code points.

Example: '主題' (UTF-8 bytes e4 b8 bb) became chars 'ä¸­' which then encode
to UTF-8 as c3 a4 c2 b8 c2 ad (12 bytes total). When read as UTF-8 these 6
characters display as 'ä¸­' which looks like Latin letters but is unreadable.

Fix: detect strings that have NO CJK characters but DO have many Latin-1
high-byte characters (0xA0-0xFF) — those are mojibake. Reverse the
double-encoding by taking each char's code point, encoding as Latin-1
(each char -> 1 byte), then decoding as UTF-8 to recover the original.
"""
import re
import sys


def looks_broken(s):
    """Detect if a string is mojibake (no CJK but many Latin-1 hi-bit chars)."""
    cjk_count = sum(1 for c in s if 0x4E00 <= ord(c) <= 0x9FFF)
    hi_latin_count = sum(1 for c in s if 0xA0 <= ord(c) <= 0xFF)
    return cjk_count == 0 and hi_latin_count > 5


def fix_mojibake(s):
    """Recover Chinese from a mojibake string."""
    try:
        return s.encode('latin-1').decode('utf-8')
    except (UnicodeEncodeError, UnicodeDecodeError):
        result = []
        i = 0
        while i < len(s):
            best = None
            for j in range(i + 1, min(i + 6, len(s) + 1)):
                try:
                    decoded = s[i:j].encode('latin-1').decode('utf-8')
                    best = (j, decoded)
                except (UnicodeDecodeError, UnicodeEncodeError):
                    break
            if best:
                result.append(best[1])
                i = best[0]
            else:
                result.append(s[i])
                i += 1
        return ''.join(result)


def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    count_fixed = 0
    count_kept = 0
    new_lines = []
    for line in content.split('\n'):
        m = re.match(r'^(\s*["\'][^"\']+["\']\s*:\s*["\'])(.*?)(["\'],?\s*)$', line)
        if m:
            value = m.group(2)
            if looks_broken(value):
                try:
                    fixed = fix_mojibake(value)
                    if not looks_broken(fixed):
                        line = m.group(1) + fixed + m.group(3)
                        count_fixed += 1
                    else:
                        count_kept += 1
                except Exception:
                    count_kept += 1
            else:
                count_kept += 1
        new_lines.append(line)

    new_content = '\n'.join(new_lines)

    if count_fixed > 0:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return count_fixed, count_kept


if __name__ == '__main__':
    for path in sys.argv[1:]:
        fixed, kept = fix_file(path)
        print(f"{path}: fixed={fixed}, kept={kept}")
