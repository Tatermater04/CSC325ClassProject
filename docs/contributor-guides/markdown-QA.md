# Markdown Quality Assurance (QA)

Welcome to the Markdown Quality Assurance (QA) guide for this repository! As a community of contributors, it's important to maintain consistent, high-quality markdown files. To help achieve this, we'll be using two command line tools: **Vale** and **markdownlint-cli**.

## Why Use Vale and markdownlint-cli?

- **Vale** is a powerful linter that checks for readability, consistency, and errors. It helps ensure that your markdown content is clear and polished.
- **markdownlint-cli** ensures that your markdown files adhere to best practices, such as proper heading structure, consistent use of lists, and correct syntax.

Both tools are essential for maintaining the quality of our documentation and markdown files in this repository.

## Tool Setup and Usage

Follow these steps to ensure your markdown files meet the required standards before pushing them to the default branch.

### Getting Started with **Vale**

1. **Rebuild the Dev Container**\
    First, we must sync the requires `styles` directory for Vale.
   
    In VS Code or GitHub Codespaces, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and select:
    - `Dev Containers: Rebuild Container` in VS Code
    - `Codespaces: Rebuild Container` in GitHub Codespaces

1. **Vale is Ready to Use** \
    After the rebuild, Vale will be ready to go. To run Vale in the terminal, use the command: 
     ```bash
    vale .
    ``` 

1. **Configuring Alerts**\
    Vale provides alerts with varying severity levels: suggestions, warnings, and errors (from least to most severe). To adjust the minimum alert level, open the `.vale.ini` file and set `<level>` in the following line to your desired level.
    ```bash
    MinAlertLevel = <level>
    ``` 

1. **Make Edits to Your Files**\
    After running Vale, review its suggestions and make necessary edits to your markdown files.

### Getting Started with **markdownlint-cli**

1. **Ready to Use**\
    markdownlint-cli is pre-installed and ready to use. To call the linter from the terminal, use the command 
    ```bash
    markdownlint .
    ``` 

1. **Configuring Error Codes**\
    To chose which error codes are visible, open the `.markdownlint.yaml` file and add a line for each error you want to ignore, in the format:
    ```bash
    <ErrorCode>: false>
    ```

1. **Selecting Ignored Files**\
    To choose which files markdownlint-cli should ignore, open the `.markdownlintignore` file and add the file names or directories you want to exclude, one per line.

1. **Make Edits to Your Files**
    After running markdownlint-cli, address the reported issues in your markdown files.
