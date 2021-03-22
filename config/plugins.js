module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('detour-digital'),
        api_key: env('721317217541439'),
        api_secret: env('mC1bALOQIkDVhkzJ__nesspbU_A'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });