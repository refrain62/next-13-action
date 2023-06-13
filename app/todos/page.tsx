import prisma from '@/lib/prisma';

const Page = async () => {
    const todos = await prisma.todo.findMany();

    return (
        <div className="m-8">
            <h1 className="text-xl font-bold">Todo一覧</h1>
            <ul className="mt-8">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>

            <form className="flex items-center mt-4">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" className="border mx-2 p-1" />
                <button
                    type="submit"
                    className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
                    >
                        Add Todo
                    </button>
            </form>
        </div>
    );
};

export default Page;
