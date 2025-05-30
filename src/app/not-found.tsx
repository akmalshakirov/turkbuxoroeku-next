import Button from "@/components/ui/Button";
import Link from "next/link";

function NotFoundPage() {
    return (
        <div className='flex flex-col items-center justify-center text-center min-h-[77vh] p-10'>
            <h1 className='text-9xl font-extrabold text-gray-800 mb-4'>404</h1>
            <p className='text-lg text-gray-600 mb-6'>
                К сожалению, страница, которую вы ищете, не найдена.
            </p>
            <Link href='/'>
                <Button className='text-white' name='to home'>
                    Вернуться на главную
                </Button>
            </Link>
        </div>
    );
}

export default NotFoundPage;
