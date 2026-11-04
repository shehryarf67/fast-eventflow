param([string]$FfmpegPath = '')
$ErrorActionPreference = 'Stop'
$repositoryPath = Split-Path -Parent $PSScriptRoot
if (-not $FfmpegPath) {
    $FfmpegPath = Join-Path $repositoryPath 'work\video-python\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'
}
if (-not (Test-Path -LiteralPath $FfmpegPath)) { throw 'Pass -FfmpegPath with a full FFmpeg executable supporting libx264.' }
$recording = Get-Content -LiteralPath (Join-Path $repositoryPath 'work\video\recording.json') -Raw | ConvertFrom-Json
$outputFolder = Join-Path $repositoryPath 'deliverables\D4\video'
New-Item -ItemType Directory -Force -Path $outputFolder | Out-Null
$outputFile = Join-Path $outputFolder 'D08-Shmeezki&Mahid-D4-Prototype.mp4'
$probeText = (& $FfmpegPath -hide_banner -i $recording.source 2>&1 | Out-String)
$durationMatch = [regex]::Match($probeText, 'Duration: (\d+):(\d+):(\d+\.\d+)')
if (-not $durationMatch.Success) { throw 'Unable to read source duration.' }
$sourceSeconds = 3600 * [double]$durationMatch.Groups[1].Value + 60 * [double]$durationMatch.Groups[2].Value + [double]$durationMatch.Groups[3].Value
$timeScale = (295 / $sourceSeconds).ToString('0.0000000000', [System.Globalization.CultureInfo]::InvariantCulture)
& $FfmpegPath -hide_banner -y -i $recording.source -vf "setpts=$timeScale*PTS" -r 25 -t 295 -an -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -movflags +faststart $outputFile
if ($LASTEXITCODE -ne 0) { throw 'MP4 export failed.' }
Write-Output "Exported silent walkthrough: $outputFile"
