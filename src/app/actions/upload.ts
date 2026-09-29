"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
});

export async function getPresignedUrl(fileName: string, fileType: string) {
  try {
    const ext = fileName.split('.').pop();
    const uniqueId = crypto.randomBytes(16).toString("hex");
    const key = `consults/${uniqueId}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME!,
      Key: key,
      ContentType: fileType,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    return {
      success: true,
      url,
      key,
      // Public or accessible URL will depend on if the bucket has a custom domain or if we just store the key
      // and generate signed URLs for reading later. Let's return the key so we can store it in DB.
    };
  } catch (error) {
    console.error("Error generating presigned URL", error);
    return { success: false, error: "Failed to generate upload URL" };
  }
}
