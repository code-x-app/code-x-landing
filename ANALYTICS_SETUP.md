# Google Analytics & Tag Manager Setup

## 🚀 Quick Setup

### 1. Environment Variables
Create a `.env.local` file in the root directory:

```bash
# Google Tag Manager Configuration
NEXT_PUBLIC_GTM_ID=GTM-5L6K8X4G

# Google Analytics (if using directly)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. GTM Container Setup
1. Create GTM containers for both domains:
   - `code-x.app` (marketing site)
   - `securi-x.code-x.app` (dashboard)

2. Your GTM container ID: `GTM-5L6K8X4G`

### 3. GA4 Configuration in GTM
- Add GA4 Configuration tag
- Measurement ID: `G-XXXXXXXXXX`
- Trigger: All Pages

### 4. Custom Events (Recommended Implementation)

#### Landing Page Events
```javascript
import { pushToDataLayer } from '@/components/GoogleTagManager';

// When user clicks "Explore SECURI^X"
pushToDataLayer({
  event: 'cta_clicked',
  cta_type: 'explore_securix',
  page_section: 'hero'
});

// When user clicks "Join Beta"
pushToDataLayer({
  event: 'cta_clicked',
  cta_type: 'join_beta',
  page_section: 'hero'
});

// When user views different sections
pushToDataLayer({
  event: 'section_viewed',
  section_name: 'arsenal', // or 'crew', 'about', etc.
  scroll_depth: '50%'
});
```

#### Dashboard Events (for Security-X)
```javascript
// Wallet connection
pushToDataLayer({
  event: 'wallet_connected',
  wallet_type: 'metamask', // or walletconnect, etc.
  chain_id: chainId,
  connection_method: 'click'
});

// Security scan completed
pushToDataLayer({
  event: 'security_scan_completed',
  wallet_address: '0x...', // hashed for privacy
  risk_score: 85,
  threats_found: 3,
  scan_duration_sec: 12,
  chains_scanned: ['ethereum', 'polygon']
});

// Approval viewed
pushToDataLayer({
  event: 'approval_viewed',
  token_symbol: 'USDC',
  dapp: 'Uniswap',
  risk_level: 'high',
  chain_id: 1,
  allowance_amount: '1000000'
});

// Approval revoked
pushToDataLayer({
  event: 'approval_revoked',
  token_symbol: 'USDC',
  spender: '0x...',
  chain_id: 1,
  allowance_before: '1000000',
  action_source: 'ui',
  gas_estimate: '21000'
});

// Session terminated
pushToDataLayer({
  event: 'session_terminated',
  session_id: 'session_123',
  origin: 'walletconnect',
  duration_sec: 3600,
  termination_reason: 'user_action'
});

// Risk flag clicked
pushToDataLayer({
  event: 'risk_flag_clicked',
  risk_type: 'unlimited_allowance',
  page_section: 'approvals_list',
  severity: 'high'
});
```

### 5. Conversion Events to Mark in GA4
- `approval_revoked`
- `session_terminated`
- `cta_clicked` (with cta_type = 'explore_securix')
- `wallet_connected`

### 6. Custom Dimensions to Create in GA4
- `risk_level` (Event scope)
- `token_symbol` (Event scope)
- `wallet_type` (Event scope)
- `chain_id` (Event scope)
- `cta_type` (Event scope)
- `page_section` (Event scope)

### 7. Privacy Policy Update
Add this line to your Privacy Policy:

"We use Google Analytics and Google Tag Manager to collect anonymous usage data and behavior analytics to improve our services. This includes page views, button clicks, and feature usage. No personally identifiable information is collected."

### 8. Testing Checklist
- [ ] GTM Preview mode works on both domains
- [ ] GA4 DebugView shows events
- [ ] Custom events fire correctly
- [ ] Conversions are marked properly
- [ ] Custom dimensions are populated

## 🔧 Implementation Notes

- The GTM component is already set up in the layout
- Use the `pushToDataLayer` helper function for custom events
- All events include relevant context parameters
- Privacy-first approach with hashed addresses
- Ready for both marketing site and dashboard implementation
