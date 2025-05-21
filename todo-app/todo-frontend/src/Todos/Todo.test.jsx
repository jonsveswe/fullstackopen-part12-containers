// src/Todos/Todo.test.jsx
import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  const todo = { id: 1, text: 'Buy milk', done: false };
  const onDelete = vi.fn();
  const onComplete = vi.fn();

  test('renders the todo text', () => {
    render(<Todo todo={todo} onDelete={onDelete} onComplete={onComplete} />);
    const element = screen.getByText(todo.text, { exact: false });
    expect(element).toBeInTheDocument();
  });

});