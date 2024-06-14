
# Managing Large Files with Git LFS for Drupal Website Backup

This guide explains how to use Git Large File Storage (LFS) to manage large files within the `APL-Innovation-Lab/aplcms-minus` repository. Our example focuses on `aplcms-minus.sql.gz`, a sanitized backup of the Austin Public Library's Drupal website. This backup is designed to be imported into a local development environment using tools like DDEV or Pantheon, tailored for a MySQL database version 8.0.

## Prerequisites

- Git and Git LFS installed on your machine
- Access to the `APL-Innovation-Lab/aplcms-minus` GitHub repository

## Installation

1. **Install Git LFS**:
   If you haven't already installed Git LFS, you can do so by following the instructions on the [Git LFS website](https://git-lfs.github.com/).

2. **Enable Git LFS in Your Repository**:
   Navigate to your local clone of the repository and run:
   ```bash
   git lfs install
   ```

## Tracking Large Files

1. **Track Large Files With Git LFS**:
   To start tracking `aplcms-minus.sql.gz` with Git LFS, execute:
   ```bash
   git lfs track "aplcms-minus.sql.gz"
   ```
   This command updates the `.gitattributes` file to manage the file with LFS.

2. **Add Changes**:
   Stage the `.gitattributes` file and any other changes:
   ```bash
   git add .gitattributes aplcms-minus.sql.gz
   ```

3. **Commit Changes**:
   Commit your changes to the repository:
   ```bash
   git commit -m "Track aplcms-minus.sql.gz using Git LFS"
   ```

## Pushing Changes

After committing your changes, push them to the GitHub repository:
```bash
git push origin main
```

## Importing the Database Backup

To import `aplcms-minus.sql.gz` into a local development environment, ensure you have DDEV or Pantheon set up for a MySQL database version 8.0.

1. **Using DDEV**:
   - Use the following command to import the database:
     ```bash
     ddev import-db --file=aplcms-minus.sql.gz
     ```

2. **Using Pantheon**:
   - Log in to your Pantheon account and navigate to the database import section.
   - Upload `aplcms-minus.sql.gz` directly or use Terminus to import the database.

## Conclusion

Managing large files with Git LFS ensures efficient use of bandwidth and storage, improving your workflow with large assets. By following these steps, you can easily handle large files like `aplcms-minus.sql.gz` in your projects.
