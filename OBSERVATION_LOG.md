# Git Observation Log

| Command | Purpose | Expected observation |
| --- | --- | --- |
| `git config --global user.name "Your Name"` | Configure the Git author name | Name is stored globally |
| `git config --global user.email "your-email@example.com"` | Configure the Git author email | Email is stored globally |
| `git init` | Create a local repository | Git creates a `.git` directory |
| `git status` | Check changed and untracked files | New scripts and documentation appear as untracked |
| `git add .` | Stage all repository files | Files are ready for commit |
| `git commit -m "Add initial AttendX automation tests"` | Save the first version | Initial commit is created |
| `git remote add origin <GitHub-URL>` | Connect local and GitHub repositories | `origin` remote is configured |
| `git push -u origin main` | Upload local commits to GitHub | `main` branch is published remotely |
| `git add attendance_marking_test.js` | Stage a script modification | Modified script is staged |
| `git commit -m "Update attendance marking test"` | Save the script change | Second commit is created |
| `git push` | Upload the second commit | GitHub receives the change |
| `git pull origin main` | Download and merge GitHub changes | Local files include the latest remote edit |
| `git log --oneline --decorate --all` | Display commit history | Both commits and their messages are listed |

## Commit explanation

- **Add initial AttendX automation tests**: adds the login test, attendance-marking test, README, and this observation log.
- **Update attendance marking test**: records the later change made to the attendance test.
- **Update README on GitHub**: records the direct edit made on GitHub and pulled into the local repository.