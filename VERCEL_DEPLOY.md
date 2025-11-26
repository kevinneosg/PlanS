# Vercel Deployment Checklist

## Environment Variables Ready ✓

Your environment is configured with:
- ✅ `PAYLOAD_SECRET`: 4a7f82870fbf418bb5e4e237c75efe9aef4ea98d6f3bb5168bb110b2bba73984
- ✅ `DATABASE_URL`: mongodb+srv://kevinneojh_db_user:T7zCUN8AWGo8Vm5B@plans.xhacnpd.mongodb.net/solanafloor?retryWrites=true&w=majority&appName=PlanS
- ✅ `NEXT_PUBLIC_SERVER_URL`: (Will be set to your Vercel URL after deployment)

## Step-by-Step Deployment Guide

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `solanafloor-clone` (or your preferred name)
   - **Description**: "SolanaFloor clone with Next.js 15, Payload CMS, and MongoDB"
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README (we already have one)
3. Click "Create repository"

### Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Copy your repository URL and run:

```bash
# Add GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/solanafloor-clone.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/yourusername/solanafloor-clone.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find and select `solanafloor-clone` repository
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `solanafloor-clone` (or customize)
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Add Environment Variables** (CRITICAL):
   Click "Environment Variables" and add these THREE variables:

   | Name | Value |
   |------|-------|
   | `PAYLOAD_SECRET` | `4a7f82870fbf418bb5e4e237c75efe9aef4ea98d6f3bb5168bb110b2bba73984` |
   | `DATABASE_URL` | `mongodb+srv://kevinneojh_db_user:T7zCUN8AWGo8Vm5B@plans.xhacnpd.mongodb.net/solanafloor?retryWrites=true&w=majority&appName=PlanS` |
   | `NEXT_PUBLIC_SERVER_URL` | (Leave empty for now, we'll update after deployment) |

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)

### Step 4: Update NEXT_PUBLIC_SERVER_URL

After deployment completes:

1. Copy your Vercel deployment URL (e.g., `https://solanafloor-clone.vercel.app`)
2. Go to Vercel project → Settings → Environment Variables
3. Update `NEXT_PUBLIC_SERVER_URL` to your deployment URL
4. Redeploy (Deployments tab → Click "..." → Redeploy)

### Step 5: MongoDB Atlas Network Access

Ensure MongoDB allows Vercel connections:

1. Go to MongoDB Atlas Dashboard
2. Click "Network Access" (left sidebar)
3. Click "Add IP Address"
4. Select "Allow Access from Anywhere" (0.0.0.0/0)
5. Click "Confirm"

**Note**: For production, you can restrict to specific IPs, but Vercel uses dynamic IPs.

### Step 6: Test Your Deployment

Visit your deployed URLs:

- **Homepage**: `https://your-project.vercel.app`
- **Admin Panel**: `https://your-project.vercel.app/admin`
- **News Page**: `https://your-project.vercel.app/news`
- **Data Page**: `https://your-project.vercel.app/data`

### Step 7: Create First Admin User

1. Go to `https://your-project.vercel.app/admin`
2. Click "Create your first user"
3. Fill in:
   - Email
   - Password
   - Confirm password
4. Click "Create"

You're now logged into the Payload CMS admin panel!

## Troubleshooting

### Build Fails on Vercel

**Error**: "Module not found" or TypeScript errors
- Check that all dependencies are in `package.json`
- Ensure `"type": "module"` is in package.json
- Check build logs for specific errors

### Database Connection Fails

**Error**: "MongooseError: connection refused"
- Verify `DATABASE_URL` is correct in Vercel environment variables
- Check MongoDB Atlas Network Access allows 0.0.0.0/0
- Ensure database user has read/write permissions

### Admin Panel 404

**Error**: Admin panel not found
- Verify file exists: `app/(payload)/admin/[[...segments]]/page.tsx`
- Check that `@payloadcms/next` is installed
- Redeploy after confirming files are in GitHub

### PAYLOAD_SECRET Error

**Error**: "PAYLOAD_SECRET is required"
- Verify environment variable is set in Vercel
- Check spelling is exact: `PAYLOAD_SECRET` (case-sensitive)
- Redeploy after adding

## Post-Deployment Checklist

- [ ] Site loads at Vercel URL
- [ ] Admin panel accessible at `/admin`
- [ ] First admin user created
- [ ] Can create articles in admin panel
- [ ] Articles display on frontend
- [ ] MongoDB Atlas shows database "solanafloor"
- [ ] All pages working (news, learn, data)

## Next Steps After Deployment

1. **Add Custom Domain** (optional):
   - Vercel Project → Settings → Domains
   - Add your custom domain
   - Update DNS records
   - Update `NEXT_PUBLIC_SERVER_URL`

2. **Set Up Analytics**:
   - Vercel Analytics (built-in)
   - Google Analytics
   - Plausible, etc.

3. **Configure SEO**:
   - Update meta tags
   - Add sitemap
   - Set up robots.txt

4. **Content Management**:
   - Create authors
   - Publish articles
   - Upload images
   - Set categories

## Support

If you need help:
- Vercel Docs: https://vercel.com/docs
- Payload CMS Docs: https://payloadcms.com/docs
- MongoDB Atlas Docs: https://www.mongodb.com/docs/atlas/

---

**Your MongoDB Connection String** (save this securely):
```
mongodb+srv://kevinneojh_db_user:T7zCUN8AWGo8Vm5B@plans.xhacnpd.mongodb.net/solanafloor?retryWrites=true&w=majority&appName=PlanS
```

**Your Payload Secret** (save this securely):
```
4a7f82870fbf418bb5e4e237c75efe9aef4ea98d6f3bb5168bb110b2bba73984
```
