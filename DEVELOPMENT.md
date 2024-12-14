# Development Guide

## Git Workflow

Since the project environment requires specific paths for Git commands, here's the workflow to commit and push changes:

1. After making changes to files, stage them using:
```bash
C:\Program Files\Git\bin\git.exe add [file_path]
```

2. Commit the changes with a descriptive message:
```bash
C:\Program Files\Git\bin\git.exe commit -m "Your descriptive message here"
```

3. Push the changes to the repository:
```bash
C:\Program Files\Git\bin\git.exe push
```

### Example Usage

For example, if you modified the About.tsx component:
```bash
C:\Program Files\Git\bin\git.exe add src/components/About.tsx
C:\Program Files\Git\bin\git.exe commit -m "Update About page hero image"
C:\Program Files\Git\bin\git.exe push
```

The changes will be pushed to the main branch and deployed automatically.

## Project Structure

- `src/` - Source code directory
  - `components/` - React components
  - `assets/` - Images and other static assets

## Deployment

Changes pushed to the main branch are automatically deployed to the production environment.
