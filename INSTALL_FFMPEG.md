# FFmpeg Installation Required

To extract video frames, you need to install FFmpeg:

## Option 1: Using winget (Recommended)
```bash
winget install ffmpeg
```

## Option 2: Using Chocolatey
```bash
choco install ffmpeg
```

## Option 3: Manual Installation
1. Download from https://ffmpeg.org/download.html#build-windows
2. Extract to C:\ffmpeg
3. Add C:\ffmpeg\bin to your PATH

## Verify Installation

After installation, verify FFmpeg is working:
```bash
ffmpeg -version
```

You should see version info. If you get "command not found", restart your terminal or add FFmpeg to PATH manually.

---

## Extract Frames from Your Video

### 1. Create the frames directory
```bash
mkdir public\frames
```

### 2. Run the extraction command
```bash
ffmpeg -y -i "C:\Users\#Mofi\Downloads\drone sunset.mp4" -vf "scale=1920:1080" -q:v 3 -f image2 "public\frames\frame_%04d.jpg"
```

**What this does:**
- `-y` — overwrite existing frames
- `-i` — input video file
- `-vf "scale=1920:1080"` — resize to 1920×1080
- `-q:v 3` — quality (2-5; lower = better, bigger files)
- `frame_%04d.jpg` — output as frame_0001.jpg, frame_0002.jpg, etc.

### 3. Count the frames
```bash
dir /b public\frames | find /c ".jpg"
```

This prints the total frame count.

### 4. Update your component

Open `components/scroll-hero.tsx` and set:
```typescript
const FRAME_COUNT = 240; // ← use your actual count
```

---

## Tips for Better Results

**Frame rate:** The demo samples every frame. For a smoother scroll experience with a long video, extract fewer frames:
```bash
ffmpeg -y -i "video.mp4" -vf "fps=10,scale=1920:1080" -q:v 3 "public\frames\frame_%04d.jpg"
```
(10 fps = 10 frames per second of video)

**Quality vs. size:** Use `-q:v 2` for higher quality (larger files) or `-q:v 5` for smaller files (slightly lower quality).

**Short clips work best:** 5-15 seconds (50-150 frames) gives smooth scrolling without huge load times.

---

## Troubleshooting

**"command not found" after install:**
- Restart your terminal
- Or manually add to PATH: System Properties → Environment Variables → Path → New → `C:\ffmpeg\bin`

**"No such file or directory":**
- Check the video path — use quotes around paths with spaces
- Make sure `public\frames\` exists first

**Frames aren't loading in the browser:**
- Verify frames exist: `dir public\frames`
- Check FRAME_COUNT matches the actual number of frames
- Restart the dev server after adding frames
