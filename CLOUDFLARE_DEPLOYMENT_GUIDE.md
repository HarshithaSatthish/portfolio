# Cloudflare Pages Automated Deployment Guide — Harshitha S Developer Portfolio

This repository is now configured with an automated GitHub Actions workflow to build and deploy Harshitha's portfolio directly to **Cloudflare Pages**.

---

## 1. Automated Workflow File
- **Workflow File**: [`.github/workflows/cloudflare-pages.yml`](file:///c:/Users/harsh/Downloads/harshitha-portfolio-source/harshitha-portfolio/.github/workflows/cloudflare-pages.yml)
- **Trigger**: Every `push` to `main` branch or manual `workflow_dispatch`.
- **Project Name**: `harshitha-portfolio`
- **Build Output**: `dist/` (Base: `/`)

---

## 2. Required GitHub Repository Secrets

To enable GitHub Actions to communicate with your Cloudflare account, add two repository secrets in GitHub:

1. Navigate to your GitHub repository:
   **[https://github.com/HarshithaSatthish/portfolio/settings/secrets/actions](https://github.com/HarshithaSatthish/portfolio/settings/secrets/actions)**
2. Click **New repository secret** and add:

| Secret Name | Value Description | Where to find in Cloudflare |
| :--- | :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | An API token with Pages edit permissions | **Cloudflare Dashboard** $\to$ User Profile (top right) $\to$ **API Tokens** $\to$ **Create Token** $\to$ Use the **Cloudflare Pages** template. |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID | **Cloudflare Dashboard** $\to$ **Workers & Pages** $\to$ Copy the **Account ID** shown on the right sidebar. |

---

## 3. Alternative: Direct Cloudflare Dashboard Connection (Zero Secrets Needed)

If you prefer not to manage API tokens, you can connect the GitHub repository directly inside the Cloudflare Dashboard:

1. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** $\to$ **Workers & Pages**.
2. Click **Create application** $\to$ **Pages** $\to$ **Connect to Git**.
3. Select the repository: `HarshithaSatthish/portfolio`.
4. Configure Build Settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave blank)
5. Click **Save and Deploy**. Cloudflare will build and host it at `https://harshitha-portfolio.pages.dev`.

---

## 4. Committing and Pushing Changes

Once you're ready, run the following commands to commit the new workflow and push to GitHub:

```bash
git add .github/workflows/cloudflare-pages.yml src/ public/ LIVE_DEPLOYMENT_COMPLETE.md
git commit -m "ci: configure automated Cloudflare Pages deployment workflow"
git push origin main
```
