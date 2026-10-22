---
title: "filterOptions.ts: use enums from the shared lib, don't hardcode names"
author: Roman
date: 2026-10-22
standing: true
id: l-bbe2e00e
scope: repo
status: active
touches:
  - src/modules/agents/modules/agent-card/modules/agent-calls/components/_internals/table-templates/table-direction.vue
---

## Decided
Filter names such as `uploadedAt`, call directions, and `CallActions`/`EavesdropState` must come from enums in the shared UI/SDK lib. Do not declare local string constants like `const UploadedAt = 'uploadedAt'`. If the lib lacks the value, add it to the lib and import it. The same applies to `useDownloadArchive.ts` and `table-direction.vue`, which should use the lib's `CallDirection` enum.
Example: in PR #519, three `filterOptions.ts` files defined a local `UploadedAt` constant. The review asked for it to be added to the lib enum.

_From review on #533, #519 here, merged Oct 7._
