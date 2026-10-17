# PackComply V2 — Germany/EU starter

Free preliminary packaging export checker.

## What is included
- Deterministic rule engine for a Germany/EU starter scope.
- EU food-contact framework: Regulation (EC) 1935/2004.
- EU plastic food-contact framework: Regulation (EU) 10/2011.
- EU food-contact GMP: Regulation (EC) 2023/2006.
- EU Packaging and Packaging Waste Regulation: Regulation (EU) 2025/40.
- Germany: LUCID/EPR screening for consumer-facing distribution, with foreign-direct-sales flag.
- Optional photo inspection endpoint; works in demo mode without an API key.

## Deployment
For Vercel, import this repository and allow the Express preset/default settings. No API key is required for the free demo mode.

## Important
This is a screening tool, not legal advice or a binding conformity assessment. Regulatory applicability must be verified against the linked official source and the user's actual role, packaging and intended use.


## V3 scope
The first product-specific module is Cinnamon for Germany/EU. It adds pesticide MRL screening, dried-spice PAH screening, consumer food-labelling screening, and an Access2Markets tariff/formality checkpoint. Other countries in the UI are selectable but should be treated as unsupported until their rule modules are populated.
