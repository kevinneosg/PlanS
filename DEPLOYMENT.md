# Deployment Guide

## Prerequisites

1. A Vercel account (https://vercel.com)
2. A MongoDB database (MongoDB Atlas or local MongoDB)
3. GitHub repository (optional but recommended)

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file with the following variables:

```env
# Payload CMS Secret (use a secure random string)
PAYLOAD_SECRET=your-secure-random-string-here

# MongoDB Connection String
DATABASE_URL=mongodb://localhost:27017/solanafloor
# Or for MongoDB Atlas:
# DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/solanafloor

# Next.js URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Start Development Server
```bash
npm run dev
```

The app will be available at:
- **Frontend**: http://localhost:3000
- **Payload Admin**: http://localhost:3000/admin

## MongoDB Setup Options

### Option 1: MongoDB Atlas (Recommended for Production)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Add the connection string to your `.env.local` file

### Option 2: Local MongoDB

1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/solanafloor`

## Vercel Deployment

### Method 1: Using Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? solanafloor-clone
# - In which directory is your code located? ./
```

### Method 2: Using GitHub + Vercel Dashboard

1. **Push to GitHub**:
```bash
git remote add origin https://github.com/yourusername/solanafloor-clone.git
git branch -M main
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
   - Add environment variables (see below)
   - Click "Deploy"

### Environment Variables for Vercel

Add these in the Vercel dashboard (Settings → Environment Variables):

```
PAYLOAD_SECRET=your-secure-random-string-here
DATABASE_URL=your-mongodb-atlas-connection-string
NEXT_PUBLIC_SERVER_URL=https://your-project.vercel.app
```

**Important**: Generate a secure random string for `PAYLOAD_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Post-Deployment Steps

### 1. Create First Admin User

After deployment, visit `https://your-project.vercel.app/admin` and create your first admin user.

### 2. Seed Initial Data

You can use the Payload admin panel to:
- Create authors
- Create article categories
- Publish articles

### 3. Test the Application

- **Homepage**: https://your-project.vercel.app
- **News Page**: https://your-project.vercel.app/news
- **Learn Page**: https://your-project.vercel.app/learn
- **Data Page**: https://your-project.vercel.app/data
- **Admin Panel**: https://your-project.vercel.app/admin

## Troubleshooting

### Build Errors

If you encounter build errors on Vercel:

1. Check that all environment variables are set correctly
2. Ensure MongoDB connection string is valid
3. Check build logs for specific errors

### Database Connection Issues

- Verify MongoDB Atlas allows connections from all IPs (0.0.0.0/0) for Vercel
- Check that the DATABASE_URL is correct
- Ensure the database user has read/write permissions

### Payload Admin Not Loading

- Verify `PAYLOAD_SECRET` is set
- Check browser console for errors
- Ensure all Payload dependencies are installed

### 504 Gateway Timeout Errors

If you see `FUNCTION_INVOCATION_TIMEOUT` errors:

1. **Vercel Plan Check**: Free Hobby plan limits functions to 10 seconds. Upgrade to Pro for 60+ second timeouts.
2. **Increase Memory**: We've configured 1024MB memory in `vercel.json` for faster cold starts
3. **Database Performance**: Ensure your MongoDB cluster is in the same region as Vercel functions (use `"regions": ["iad1"]` for US East)

### TypeError: Cannot destructure property 'config'

If you see this error, it means Payload config isn't loading properly:

1. **Environment Variables**: Verify `PAYLOAD_SECRET` and `DATABASE_URL` are set in Vercel dashboard
2. **MongoDB Connection**: Test your MongoDB connection string locally first
3. **Redeploy**: After setting environment variables, trigger a new deployment
4. **Check Logs**: View function logs in Vercel dashboard for detailed error messages

## Custom Domain

To add a custom domain:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_SERVER_URL` environment variable to your custom domain

## API Endpoints

After deployment, your API will be available at:

- `GET /api/articles` - List articles
- `GET /api/articles/:slug` - Get single article
- `POST /api/articles` - Create article (requires auth)
- `PUT /api/articles/:slug` - Update article (requires auth)
- `DELETE /api/articles/:slug` - Delete article (requires auth)
- `GET /api/categories` - List categories
- `GET /api/authors` - List authors
- `GET /api/market` - Get market data

## Next Steps

1. Customize the design and branding
2. Add more collections in Payload
3. Integrate real market data APIs
4. Set up analytics
5. Configure SEO metadata
6. Add more features as needed

## Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Payload CMS Documentation](https://payloadcms.com/docs)
- Review the [Vercel Documentation](https://vercel.com/docs)
