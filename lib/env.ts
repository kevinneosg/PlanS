// Environment variable validation
export function validateEnv() {
  const required = [
    'PAYLOAD_SECRET',
    'DATABASE_URL'
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      `Please check your .env.local file and ensure all required variables are set.`
    );
  }

  // Validate MongoDB URL format
  const dbUrl = process.env.DATABASE_URL!;
  if (!dbUrl.startsWith('mongodb://') && !dbUrl.startsWith('mongodb+srv://')) {
    throw new Error('DATABASE_URL must be a valid MongoDB connection string');
  }

  // Validate PAYLOAD_SECRET length
  if (process.env.PAYLOAD_SECRET!.length < 32) {
    console.warn('Warning: PAYLOAD_SECRET should be at least 32 characters for production');
  }
}

// Call this function early in your app initialization
if (process.env.NODE_ENV === 'production') {
  validateEnv();
}