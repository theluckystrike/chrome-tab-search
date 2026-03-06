# Contributing to chrome-tab-search

Contributions are welcome. Please follow these guidelines to maintain code quality and consistency.

## REPORTING ISSUES

Before submitting a bug report:

1. Search existing issues to avoid duplicates
2. Test with the latest version of the package
3. Include steps to reproduce the issue
4. Provide your environment details (Node version, Chrome version, OS)

When creating an issue, use the provided issue templates and include:

- Clear description of the problem
- Minimal reproduction steps
- Expected vs actual behavior
- Relevant code snippets (if applicable)

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Clone your fork locally

   ```bash
   git clone https://github.com/theluckystrike/chrome-tab-search.git
   cd chrome-tab-search
   ```

3. Create a feature branch

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Install dependencies

   ```bash
   npm install
   ```

5. Make your changes and ensure the build passes

   ```bash
   npm run build
   ```

6. Commit your changes with a descriptive message

   ```bash
   git commit -m "Add feature description"
   ```

7. Push to your fork

   ```bash
   git push origin feature/your-feature-name
   ```

8. Submit a Pull Request

## CODE STYLE

- Use TypeScript for all new code
- Follow the existing code patterns in the project
- Run `npm run build` before committing to ensure no TypeScript errors
- Keep functions focused and modular
- Add JSDoc comments for public APIs

## TESTING

Before submitting changes:

1. Ensure the TypeScript compiler passes

   ```bash
   npm run build
   ```

2. Test your changes in a Chrome extension environment
3. Verify that existing functionality still works

## LICENSE

By contributing to chrome-tab-search, you agree that your contributions will be licensed under the MIT License.
