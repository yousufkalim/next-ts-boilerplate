> We are the first generation to feel the sting of climate change, and we are the last generation that can do something about it. Save our planet 🪴

# Next.js TypeScript Boilerplate Guide

## Overview

Welcome to the Next.js TypeScript Boilerplate! This guide will help you get started with the boilerplate and follow best practices for folder structure, React Query usage, toasts, and more.

### Features

- Next.js 14 with TypeScript
- Folder structure for better organization
- React Query for data fetching and mutations
- Tailwind for styling
- React-hot-toast for toast notifications
- SEO-friendly Meta component
- Sitemap generation script
- Pre-configured with Husky, Commit lint, ESLint, Lint-staged

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yousufkalim/next-ts-boilerplate.git
   ```

2. **Install and setup Dependencies:**

   ```bash
   cd <project-folder>
   yarn install
   cp .env.example .env
   ```
   
3. **Run in dev mode:**

   ```bash
   yarn run dev
   ```

## Folder Structure

The boilerplate follows a structured organization to enhance maintainability and scalability.

- **api:** External API handler functions.
- **assets:** Assets used in the project.
- **components:** Reusable React components.
- **config:** Configuration files, including environment variables.
- **context:** Context API setup for global state management.
- **hooks:** Useful custom hooks.
- **layouts:** Logic to gather components for layout rendering.
- **pages:** Next.js pages.
- **types:** TypeScript types and interfaces.
- **utils:** Utility functions.

## React Query

The boilerplate integrates React Query for efficient data fetching and mutations. Follow the pattern used in the 'todos' page:

- **useQuery:** Fetching data from an API.

  ```typescript
  import { fectAllTodos } from '@api/todos.api';

  // ...

  const { data, refetch, error } = useQuery('todos', fectAllTodos);
  ```

- **useMutation:** Modifying data on the server.

  ```typescript
  import { updateTodo } from '@api/todos.api';

  // ...

  const mutation = useMutation(updateTodo);
  await mutation.mutateAsync({ ...todo, completed: true });
  
  // Invalidate todos so it can refetch all todos
  queryClient.invalidateQueries({ queryKey: ['todos'] });
  
  // Or you can simply refetch
  refetch();
  ```

## Toast Notifications

For toast notifications, utilize the `react-hot-toast` library. Import and use it in your components:

```typescript
import toast from 'react-hot-toast';

// ...

toast.success('Todo marked as completed!');
```

## SEO Meta Component

Use the 'Meta' component for SEO information, including OG details. Place it at the top of your page components:

```typescript
import Meta from '@components/Meta';

const MyPage: React.FC = () => {
  return (
    <>
      <Meta title="My Page" description="This is my page." />
      {/* Your page content */}
    </>
  );
};
```

## Sitemap Generation

A script is included to generate a sitemap during the build process. Simply run:

```bash
yarn run build
```

The sitemap will be created in the 'public' folder.

## Additional Tools

The boilerplate comes with pre-configured tools for maintaining code quality:

- **Husky:** Git hooks to automate checks.
- **Commitlint:** Linting commit messages for consistency.
- **ESLint:** JavaScript and TypeScript linting.
- **Lint-staged:** Run ESLint on staged files.

## Conclusion

Congratulations! You're now set up with the Next.js TypeScript Boilerplate. Feel free to customize and extend it according to your project requirements. If you encounter issues or have suggestions, reach out to me.

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

## Author

<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/ALrn4wU.jpg" width="100">
    </td>
    <td>
      Yousuf Kalim<br />
      <a href="mailto:yousufkalim@outlook.com">yousufkalim@outlook.com</a><br />
      <a href="https://yousufkalim.com">https://yousufkalim.com</a>
    </td>
  </tr>
</table>
Authored and maintained by Yousuf Kalim.

> GitHub [@yousufkalim](https://github.com/yousufkalim) · LinkedIn [@yousufkalim](https://www.linkedin.com/in/yousufkalim/)

Happy coding!