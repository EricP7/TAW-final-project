# Secret Santa App - Project Roadmap & Status

**Project:** Secret Santa Web Application
**Tech Stack:** Vue 3 + Vue Router + Tailwind CSS + Pinia
**Last Updated:** 2026-01-20

---

## Status 1 - Analysis ✅ (Complete)

This phase is complete and all initial requirements have been met.

---

## Status 2 - Roadmap 🚀 (In Progress)

### Requirements Overview (10.5p total)

| Requirement                 | Points | Difficulty | Priority |
| --------------------------- | ------ | ---------- | -------- |
| Toggl + GitHub Pages Deploy | 0.5p   | Easy       | 1        |
| Routing (min 10)            | 0.5p   | ✅ Done    | -        |
| Computed Properties (min 5) | 2p     | ✅ Done    | -        |
| Watch (min 3)               | 2p     | ✅ Done    | -        |
| Pinia Store (min 5 stores)  | 3p     | ✅ Done    | 4        |
| PWA Integration             | 1p     | Medium     | 5        |
| ESLint                      | 0.5p   | ✅ Done    | -        |
| Prettier                    | 0.5p   | ✅ Done    | -        |
| Code Quality                | -4p    | -          | Always   |

---

### Phase 1: Setup & Tooling (Week 1) ✅

This phase is complete.

---

### Phase 2: Computed Properties (Week 2) ✅

#### 2.1 Understanding Computed (2p - Need 5 minimum)

**Goal:** Create at least 5 UI-specific computed properties for derived state.

**Implementation Checklist:**

-   [x] Add 5+ computed properties across components.
    - ✅ `filteredGroups` in `GroupsPage.vue`
    - ✅ `welcomeMessage` in `DashboardPage.vue`
    - ✅ `formattedTotalValue` in `WishlistPage.vue`
    - ✅ `filteredWishlistItems` in `WishlistPage.vue`
    - ✅ `summaryText` in `GiftFinder.vue`
-   [x] Use computed for UI-specific derived state, not business logic.
-   [x] Test that computed values update reactively.
-   [x] Document each computed property's purpose.

---

### Phase 3: Watch (Week 2-3) ✅

#### 3.1 Understanding Watch (2p - Need 3 minimum)

**Goal:** Create at least 3 UI-specific watchers for side effects.

**Implementation Checklist:**

-   [x] Add 3+ watchers for side effects.
    - ✅ Debounced search in `WishlistPage.vue`.
    - ✅ Route parameter watcher in `GroupDetails.vue`.
    - ✅ Auto-save to `localStorage` in `CreateGroupForm.vue`.
-   [x] Use watch for async operations, `localStorage`, logging, and route changes.
-   [x] Avoid using watch for derived state (use computed instead).
-   [x] Clean up watchers if needed.

---

### Phase 4: Pinia Store Integration (Week 3-4) ✅

#### 4.1 Pinia Setup (3p - Need 5 stores, 10 getters, 10 actions)

**Goal:** Centralize state management with Pinia.

**Implementation Checklist:**

-   [x] Create 5 Pinia stores (`user`, `groups`, `wishlist`, `friends`, `gifts`).
-   [x] Implement 10+ getters (2 per store minimum).
-   [x] Implement 10+ actions (2 per store minimum).
-   [x] Replace local mock data with store state in components (`DashboardPage`, `GroupsPage`, `WishlistPage`, etc.).
-   [x] Test store reactivity and actions (`createGroup`).

---

### Phase 5: PWA Integration (Week 5) ⏳

#### 5.1 PWA Setup (1p)

**Goal:** Make app installable and work offline. This is the next step.

---

## Quick Reference: Points Tracker

### Status 1 (Current: 10/10p) ✅

-   All points achieved.

### Status 2 (Target: 10.5/10.5p)

-   ⏳ 0.5p - Toggl + Deploy
-   ✅ 0.5p - Routing (already have 19)
-   ✅ 0.5p - ESLint (configured)
-   ✅ 0.5p - Prettier (configured)
-   ✅ 2p - Computed (5 implemented)
-   ✅ 2p - Watch (3 implemented)
-   ✅ 3p - Pinia (5 stores, 10+ getters, 12+ actions)
-   ⏳ 1p - PWA

---

## Testing Checklist Before Submission

-   [ ] All linting passes (`yarn lint`)
-   [ ] All formatting passes (`yarn format:check`)
-   [ ] App builds without errors (`yarn build`)
-   [x] GitHub Pages deployment works
-   [x] At least 5 computed properties implemented
-   [x] At least 3 watchers implemented
-   [x] 5 Pinia stores with 10+ getters and 10+ actions
-   [ ] PWA manifest loads correctly
-   [ ] App installable on mobile
-   [x] Props used in 5+ components
-   [x] Emits used in 5+ components