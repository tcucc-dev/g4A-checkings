// Stale-page detection config.
// Regex refined to avoid homepage footer false-positives.
window.STALE_CONFIG = {
  // Pages with these year markers are flagged 過期 (stale)
  patterns: [
    /(10[0-9]|11[0-4])\s*學年度/,  // ROC 105-114 academic year markers
    /\[(?:舊|舊版|過期)\]/,        // [舊], [過期] tag
    /AD\s*\d{2,4}\s*年/,         // AD年 markers
    /民國\s*\d{2,3}\s*年/
  ],
  // v55/v56/v57 legacy rules (exposed for compatibility)
  legacyRule: '學年度|AD年|\\[舊\\]|10[0-9]\\s*學年度|11[0-4]\\s*學年度',
  // Network detection
  httpTimeoutSec: 25,
  userAgent: 'Mozilla/5.0 (compatible; HermesReportBot/1.0)'
};
