# Secret Santa App - Project Roadmap & Status

**Project:** Secret Santa Web Application
**Tech Stack:** Vue 3 + Vue Router + Tailwind CSS + Pinia
**Last Updated:** 2026-01-08

---

## Status 1 - Analysis ✅ (Complete)

### ✅ Completed Requirements

| Requirement                | Points | Status | Notes                                                |
| -------------------------- | ------ | ------ | ---------------------------------------------------- |
| Toggl                      | 0.5p   | ✅     | Time tracking setup                                  |
| Docker                     | 0.5p   | ✅     | Docker Compose configured (Node 22, Vite, port 5173) |
| Balsamiq Mockups           | 4p     | ✅     | Desktop version with 20+ pages                       |
| VueJs + Routing + Tailwind | 5p     | ✅     | Complete - props and emits implemented               |
| Code Quality               | -4p    | ⚠️     | Penalty - needs improvement                          |

### VueJs Requirements Breakdown (5p total)

#### ✅ Complete (5p / 5p)

-   **0.5p - Small Components (min 20):** ✅ **24 components** found

    -   landing_page/: LandingPage, Header, HowItWorks
    -   sign_in/: SignIn, SignUp, ResetPassword
    -   dashboard/: Dashboard, Wishlist, GiftFinder, FriendsList, DrawnName
    -   dashboard/groups/: GroupsPage, GroupCard, GroupDetails, CreateJoinGroup, CreateGroupForm, JoinGroup, InviteToGroup
    -   header_components/: ProfileTab, Pricing, FAQ, AboutUs
    -   ActionButton, CustomButton1

-   **0.5p - Routing:** ✅ **19 routes** configured

    -   Uses Vue Router 4 with web history mode
    -   Both RouterLink and router.push() implemented

-   **0.5p - Tailwind CSS:** ✅ Fully integrated
    -   Tailwind CSS 4 with Vite plugin
    -   Consistent design system (blue/purple theme, responsive layouts)

-   **2p - Props Usage:** ✅ **Complete** (6+ components)

    -   ✅ ActionButton.vue - Uses `defineProps` for text
    -   ✅ CustomButton1.vue - Uses props
    -   ✅ ProfileTab.vue - Uses props
    -   ✅ GroupCard.vue - 5 props (groupName, dueDate, budget, rules, groupId)
    -   ✅ DrawnName.vue - 2 props (recipientName, wishlistItems)
    -   ✅ HeaderSection.vue - 5 props (brandName, brandPath, navigationLinks, showProfileTab, profileType)

-   **2p - Emit Usage:** ✅ **Complete** (5+ components)

    -   ✅ ActionButton.vue - Uses `defineEmits` with 'buttonClick' event
    -   ✅ CreateGroupForm.vue - 2 emits ('groupCreated', 'inviteParticipants')
    -   ✅ JoinGroup.vue - 2 emits ('groupJoined', 'joinError')
    -   ✅ SignIn.vue - 2 emits ('loginSuccess', 'loginError')
    -   ✅ SignUp.vue - 2 emits ('signUpSuccess', 'signUpError')

-   **0.5p - GitHub Pages:** ✅ Deployed

### ✅ Status 1 Completed Improvements

#### 1. Props Usage ✅ (2p earned)

**Completed Components:**

-   ✅ GroupCard.vue - Accepts group data via 5 props
-   ✅ DrawnName.vue - Accepts recipient data via 2 props
-   ✅ HeaderSection.vue - Accepts navigation configuration via 5 props
-   ✅ ActionButton.vue, CustomButton1.vue, ProfileTab.vue - Already had props

**Result:** 6+ components using props effectively for reusability

#### 2. Emit Pattern ✅ (2p earned)

**Completed Components:**

-   ✅ CreateGroupForm.vue - Emits 'groupCreated', 'inviteParticipants'
-   ✅ JoinGroup.vue - Emits 'groupJoined', 'joinError'
-   ✅ SignIn.vue - Emits 'loginSuccess', 'loginError'
-   ✅ SignUp.vue - Emits 'signUpSuccess', 'signUpError'
-   ✅ ActionButton.vue - Emits 'buttonClick'

**Result:** 5+ components using emits for parent-child communication

#### 3. GitHub Pages ✅ (0.5p earned)

-   ✅ Application deployed and accessible

---

## Status 2 - Roadmap 🚀 (In Progress)

### Requirements Overview (10.5p total)

| Requirement                 | Points | Difficulty | Priority |
| --------------------------- | ------ | ---------- | -------- |
| Toggl + GitHub Pages Deploy | 0.5p   | Easy       | 1        |
| Routing (min 10)            | 0.5p   | ✅ Done    | -        |
| Computed Properties (min 5) | 2p     | ✅ Done    | -        |
| Watch (min 3)               | 2p     | ✅ Done    | -        |
| Pinia Store (min 5 stores)  | 3p     | Hard       | 4        |
| PWA Integration             | 1p     | Medium     | 5        |
| ESLint                      | 0.5p   | ✅ Done    | -        |
| Prettier                    | 0.5p   | ✅ Done    | -        |
| Code Quality                | -4p    | -          | Always   |

---

### Phase 1: Setup & Tooling (Week 1)

#### 1.1 ESLint Integration (0.5p) ⚡ Quick Win

**Time:** 30 minutes

```bash
# Install ESLint for Vue 3
npm install -D eslint @eslint/js eslint-plugin-vue

# Create .eslintrc.cjs
```

**Config file:**

```javascript
// .eslintrc.cjs
module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
    env: {
        node: true,
        "vue/setup-compiler-macros": true,
    },
};
```

**Add scripts to package.json:**

```json
"scripts": {
  "lint": "eslint src --ext .js,.vue",
  "lint:fix": "eslint src --ext .js,.vue --fix"
}
```

#### 1.2 Prettier Integration (0.5p) ⚡ Quick Win

**Time:** 20 minutes

```bash
# Install Prettier
npm install -D prettier eslint-config-prettier eslint-plugin-prettier

# Create .prettierrc.json
```

**Config files:**

```json
// .prettierrc.json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 100,
    "vueIndentScriptAndStyle": false
}
```

```javascript
// .prettierignore
dist;
node_modules.yarn;
```

**Add scripts:**

```json
"scripts": {
  "format": "prettier --write 'src/**/*.{js,vue}'",
  "format:check": "prettier --check 'src/**/*.{js,vue}'"
}
```

#### 1.3 GitHub Pages Deployment (0.5p)

**Time:** 1 hour

**Update vite.config.js:**

```javascript
export default defineConfig({
    base: "/final_project/", // Your repo name
    plugins: [vue()],
    build: {
        outDir: "dist",
    },
});
```

**Create .github/workflows/deploy.yml:**

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: [master]

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: "22"
            - run: yarn install
            - run: yarn build
            - uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./dist
```

---

### Phase 2: Computed Properties (Week 2)

#### 2.1 Understanding Computed (2p - Need 5 minimum)

**Goal:** Create at least 5 computed properties for derived state

**Computed Property Locations:**

1. **GroupsPage.vue - Filtered Groups**

```vue
<script setup>
import { ref, computed } from "vue";

const groups = ref([]); // Will come from Pinia store
const searchQuery = ref("");

// COMPUTED 1: Filter groups by search
const filteredGroups = computed(() => {
    if (!searchQuery.value) return groups.value;
    return groups.value.filter((g) =>
        g.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

// COMPUTED 2: Active groups (before due date)
const activeGroups = computed(() => {
    const now = new Date();
    return groups.value.filter((g) => new Date(g.dueDate) > now);
});

// COMPUTED 3: Total group count
const groupCount = computed(() => groups.value.length);
</script>
```

2. **Wishlist.vue - Wishlist Stats**

```vue
// COMPUTED 4: Total wishlist items const totalItems = computed(() =>
wishlistItems.value.length); // COMPUTED 5: Total wishlist value const
totalValue = computed(() => { return wishlistItems.value.reduce((sum, item) =>
sum + item.price, 0); }); // COMPUTED 6: Items by category const itemsByCategory
= computed(() => { return wishlistItems.value.reduce((acc, item) => {
acc[item.category] = (acc[item.category] || 0) + 1; return acc; }, {}); });
```

3. **Dashboard.vue - User Stats**

```vue
// COMPUTED 7: User's active groups count const activeGroupsCount = computed(()
=> { // From Pinia store return userStore.activeGroups.length; }); // COMPUTED
8: Has pending draws const hasPendingDraws = computed(() => { return
userStore.groups.some(g => !g.drawnName); });
```

4. **GiftFinder.vue - Filtered Gifts**

```vue
// COMPUTED 9: Filtered gifts by price range const filteredGifts = computed(()
=> { return gifts.value.filter(g => g.price >= minPrice.value && g.price <=
maxPrice.value ); }); // COMPUTED 10: Sorted gifts const sortedGifts =
computed(() => { return [...filteredGifts.value].sort((a, b) => { if
(sortBy.value === 'price') return a.price - b.price; if (sortBy.value ===
'name') return a.name.localeCompare(b.name); return 0; }); });
```

**Implementation Checklist:**

-   [x] Add 5+ computed properties across components
-   [x] Use computed for derived state, not methods
-   [x] Test that computed values update reactively
-   [x] Document each computed property's purpose

---

### Phase 3: Watch (Week 2-3)

#### 3.1 Understanding Watch (2p - Need 3 minimum)

**Goal:** Create at least 3 watchers for side effects

**Watch Locations:**

1. **CreateGroupForm.vue - Validate on change**

```vue
<script setup>
import { ref, watch } from "vue";

const groupName = ref("");
const budget = ref(0);
const nameError = ref("");

// WATCH 1: Validate group name
watch(groupName, (newName) => {
    if (newName.length < 3) {
        nameError.value = "Group name must be at least 3 characters";
    } else if (newName.length > 50) {
        nameError.value = "Group name must be less than 50 characters";
    } else {
        nameError.value = "";
    }
});

// WATCH 2: Auto-save to localStorage
watch(
    [groupName, budget],
    ([name, budgetVal]) => {
        localStorage.setItem(
            "draftGroup",
            JSON.stringify({
                name,
                budget: budgetVal,
            })
        );
    },
    { deep: true }
);
</script>
```

2. **Wishlist.vue - Search debouncing**

```vue
// WATCH 3: Debounced search const searchQuery = ref(''); const debouncedSearch
= ref(''); watch(searchQuery, (newQuery) => { // Debounce search to avoid
excessive filtering setTimeout(() => { debouncedSearch.value = newQuery; },
300); });
```

3. **GroupDetails.vue - Fetch data on route change**

```vue
import { watch } from 'vue'; import { useRoute } from 'vue-router'; const route
= useRoute(); // WATCH 4: Reload group data when route params change watch(() =>
route.params.id, async (newId) => { if (newId) { await loadGroupDetails(newId);
} }, { immediate: true });
```

4. **Dashboard.vue - Track user activity**

```vue
// WATCH 5: Log user navigation watch(() => route.path, (newPath) => {
console.log('User navigated to:', newPath); // Could send analytics, update last
active time, etc. });
```

**Implementation Checklist:**

-   [x] Add 3+ watchers for side effects
-   [x] Use watch for async operations, localStorage, logging
-   [x] Avoid using watch for derived state (use computed instead)
-   [x] Clean up watchers if needed (return cleanup function)

---

### Phase 4: Pinia Store Integration (Week 3-4)

#### 4.1 Pinia Setup (3p - Need 5 stores, 10 getters, 10 actions)

**Goal:** Centralize state management with Pinia

**Installation:**

```bash
npm install pinia
```

**Setup in main.js:**

```javascript
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
```

#### 4.2 Store Architecture

Create **5 Pinia stores** in `src/stores/`:

##### **Store 1: User Store** (`src/stores/user.js`)

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
    // State
    const user = ref(null);
    const isAuthenticated = ref(false);

    // GETTER 1: User's full name
    const fullName = computed(() => {
        if (!user.value) return "";
        return `${user.value.firstName} ${user.value.lastName}`;
    });

    // GETTER 2: User's email
    const email = computed(() => user.value?.email || "");

    // ACTION 1: Login
    const login = async (email, password) => {
        // API call would go here
        user.value = {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email,
        };
        isAuthenticated.value = true;
    };

    // ACTION 2: Logout
    const logout = () => {
        user.value = null;
        isAuthenticated.value = false;
    };

    // ACTION 3: Update profile
    const updateProfile = async (data) => {
        user.value = { ...user.value, ...data };
    };

    return {
        user,
        isAuthenticated,
        fullName,
        email,
        login,
        logout,
        updateProfile,
    };
});
```

##### **Store 2: Groups Store** (`src/stores/groups.js`)

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGroupsStore = defineStore("groups", () => {
    // State
    const groups = ref([]);
    const currentGroup = ref(null);

    // GETTER 3: All groups count
    const groupsCount = computed(() => groups.value.length);

    // GETTER 4: Active groups (not expired)
    const activeGroups = computed(() => {
        const now = new Date();
        return groups.value.filter((g) => new Date(g.dueDate) > now);
    });

    // GETTER 5: Groups by status
    const groupsByStatus = computed(() => {
        return groups.value.reduce((acc, group) => {
            const status = group.drawn ? "active" : "pending";
            acc[status] = acc[status] || [];
            acc[status].push(group);
            return acc;
        }, {});
    });

    // ACTION 4: Fetch all groups
    const fetchGroups = async () => {
        // API call
        groups.value = [
            {
                id: 1,
                name: "Family Christmas",
                dueDate: "2026-12-25",
                budget: 50,
            },
            { id: 2, name: "Office Party", dueDate: "2026-12-20", budget: 30 },
        ];
    };

    // ACTION 5: Create group
    const createGroup = async (groupData) => {
        const newGroup = { id: Date.now(), ...groupData };
        groups.value.push(newGroup);
        return newGroup;
    };

    // ACTION 6: Join group
    const joinGroup = async (inviteCode) => {
        // API call
        const group = { id: Date.now(), name: "New Group", inviteCode };
        groups.value.push(group);
    };

    // ACTION 7: Delete group
    const deleteGroup = async (groupId) => {
        groups.value = groups.value.filter((g) => g.id !== groupId);
    };

    return {
        groups,
        currentGroup,
        groupsCount,
        activeGroups,
        groupsByStatus,
        fetchGroups,
        createGroup,
        joinGroup,
        deleteGroup,
    };
});
```

##### **Store 3: Wishlist Store** (`src/stores/wishlist.js`)

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useWishlistStore = defineStore("wishlist", () => {
    const items = ref([]);

    // GETTER 6: Total items
    const totalItems = computed(() => items.value.length);

    // GETTER 7: Total value
    const totalValue = computed(() => {
        return items.value.reduce((sum, item) => sum + item.price, 0);
    });

    // ACTION 8: Add item
    const addItem = (item) => {
        items.value.push({ id: Date.now(), ...item });
    };

    // ACTION 9: Remove item
    const removeItem = (itemId) => {
        items.value = items.value.filter((i) => i.id !== itemId);
    };

    return { items, totalItems, totalValue, addItem, removeItem };
});
```

##### **Store 4: Friends Store** (`src/stores/friends.js`)

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFriendsStore = defineStore("friends", () => {
    const friends = ref([]);

    // GETTER 8: Friends count
    const friendsCount = computed(() => friends.value.length);

    // GETTER 9: Online friends
    const onlineFriends = computed(() => {
        return friends.value.filter((f) => f.online);
    });

    // ACTION 10: Add friend
    const addFriend = async (friendId) => {
        friends.value.push({ id: friendId, name: "Friend", online: true });
    };

    return { friends, friendsCount, onlineFriends, addFriend };
});
```

##### **Store 5: Gifts Store** (`src/stores/gifts.js`)

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGiftsStore = defineStore("gifts", () => {
    const gifts = ref([]);
    const filters = ref({ minPrice: 0, maxPrice: 1000 });

    // GETTER 10: Filtered gifts
    const filteredGifts = computed(() => {
        return gifts.value.filter(
            (g) =>
                g.price >= filters.value.minPrice &&
                g.price <= filters.value.maxPrice
        );
    });

    // ACTION 11: Fetch gifts
    const fetchGifts = async () => {
        // API call
        gifts.value = [
            { id: 1, name: "Gift 1", price: 25 },
            { id: 2, name: "Gift 2", price: 50 },
        ];
    };

    // ACTION 12: Update filters
    const updateFilters = (newFilters) => {
        filters.value = { ...filters.value, ...newFilters };
    };

    return { gifts, filters, filteredGifts, fetchGifts, updateFilters };
});
```

**Implementation Checklist:**

-   [ ] Create 5 Pinia stores
-   [ ] Implement 10+ getters (2 per store minimum)
-   [ ] Implement 10+ actions (2 per store minimum)
-   [ ] Replace local state with store state in components
-   [ ] Test store reactivity

---

### Phase 5: PWA Integration (Week 5)

#### 5.1 PWA Setup (1p)

**Goal:** Make app installable and work offline

**Installation:**

```bash
npm install -D vite-plugin-pwa
```

**Update vite.config.js:**

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
                "favicon.ico",
                "robots.txt",
                "apple-touch-icon.png",
            ],
            manifest: {
                name: "Secret Santa App",
                short_name: "SecretSanta",
                description: "Organize your Secret Santa gift exchanges",
                theme_color: "#2563eb",
                background_color: "#ffffff",
                display: "standalone",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
            workbox: {
                cleanupOutdatedCaches: true,
                skipWaiting: true,
            },
        }),
    ],
});
```

**Create icons:**

-   Create `public/pwa-192x192.png`
-   Create `public/pwa-512x512.png`
-   Create `public/apple-touch-icon.png`

**Test PWA:**

-   [ ] Run `yarn build` and serve with `yarn preview`
-   [ ] Open Chrome DevTools > Application > Manifest
-   [ ] Test "Add to Home Screen"
-   [ ] Test offline functionality

---

## Implementation Timeline

### Week 1: Foundation & Tooling

-   ✅ Day 1-2: ESLint + Prettier setup
-   ✅ Day 3-4: GitHub Pages deployment
-   ✅ Day 5: Fix Status 1 issues (Props & Emits)

### Week 2: Reactivity Features

-   Day 1-3: Implement 5+ computed properties
-   Day 4-5: Implement 3+ watchers

### Week 3-4: State Management

-   Day 1-2: Set up Pinia + User Store
-   Day 3-4: Groups Store + Wishlist Store
-   Day 5-6: Friends Store + Gifts Store
-   Day 7-8: Refactor components to use stores

### Week 5: PWA & Polish

-   Day 1-2: PWA integration
-   Day 3-4: Testing & bug fixes
-   Day 5: Final deployment & documentation

---

## Quick Reference: Points Tracker

### Status 1 (Current: 10/10p) ✅

-   ✅ 0.5p - Toggl
-   ✅ 0.5p - Docker
-   ✅ 4p - Mockups
-   ✅ 1p - Routing + Tailwind + Components
-   ✅ 2p - Props (6+ components)
-   ✅ 2p - Emits (5+ components)
-   ✅ 0.5p - GitHub Pages

### Status 2 (Target: 10.5/10.5p)

-   0.5p - Toggl + Deploy
-   ✅ 0.5p - Routing (already have 19)
-   ✅ 0.5p - ESLint (configured)
-   ✅ 0.5p - Prettier (configured)
-   ✅ 2p - Computed (9 implemented)
-   ✅ 2p - Watch (4 implemented)
-   ⏳ 3p - Pinia (5 stores, 10 getters, 10 actions)
-   ⏳ 1p - PWA

---

## Tips for Success

### Code Quality (Avoid -4p penalty)

1. **Use ESLint & Prettier** - Automatic code formatting prevents issues
2. **Consistent naming** - camelCase for variables, PascalCase for components
3. **Component organization** - Keep components small and focused
4. **Comments** - Document complex logic
5. **Git commits** - Clear, descriptive commit messages
6. **Remove unused code** - Delete CustomButton1 if not used

### Best Practices

1. **Props validation** - Always define prop types
2. **Computed vs Methods** - Use computed for derived state
3. **Watch carefully** - Avoid overusing watch (prefer computed)
4. **Store organization** - Keep stores focused on single responsibility
5. **Error handling** - Add try-catch in actions
6. **TypeScript** - Consider migrating for better type safety (bonus)

### Testing Checklist Before Submission

-   [ ] All linting passes (`yarn lint`)
-   [ ] All formatting passes (`yarn format:check`)
-   [ ] App builds without errors (`yarn build`)
-   [x] GitHub Pages deployment works
-   [x] At least 5 computed properties implemented
-   [x] At least 3 watchers implemented
-   [ ] 5 Pinia stores with 10+ getters and 10+ actions
-   [ ] PWA manifest loads correctly
-   [ ] App installable on mobile
-   [x] Props used in 5+ components
-   [x] Emits used in 5+ components

---

## Need Help?

### Priority Order for Status 2

1. ✅ Set up tooling (ESLint, Prettier) - DONE
2. ✅ Implement Computed Properties (9 implemented) - DONE
3. ✅ Implement Watch (4 implemented) - DONE
4. Build Pinia stores (5 stores, 10+ getters, 10+ actions)
5. Add PWA support

### Next Steps

1. ✅ Status 1 completed - Props & Emits implemented
2. ✅ Prettier configured and working
3. Consider creating a branch for Status 2: `git checkout -b status-2`
4. Start implementing Computed Properties
5. Commit regularly with clear messages
6. Test each feature before moving to next

**Good luck! 🎄🎁**
