$ErrorActionPreference = 'Stop'
$repositoryPath = Split-Path -Parent $PSScriptRoot
$reportPath = Join-Path $repositoryPath 'deliverables\D4\D08-Shmeezki&Mahid-D4-Submission.docx'
$pdfPath = [System.IO.Path]::ChangeExtension($reportPath, '.pdf')
$wordApp = $null
$reportDocument = $null
try {
    $wordApp = New-Object -ComObject Word.Application
    $wordApp.Visible = $false
    $wordApp.DisplayAlerts = 0
    $reportDocument = $wordApp.Documents.Open($reportPath, $false, $true)
    $reportDocument.ExportAsFixedFormat($pdfPath, 17)
    Write-Output "Exported report using installed Microsoft Word: $pdfPath"
}
finally {
    if ($null -ne $reportDocument) { $reportDocument.Close(0) }
    if ($null -ne $wordApp) { $wordApp.Quit() }
}
