import { useRouter } from 'next/router';
//Kuka od next.jsa

const TestimonialPage = () => {
    const router = useRouter();

    return (
        <h1 className="text-2xl text-center p-20">
            Hi from{' '}
            <span className="text-red-400">{router.query.testimonialId}</span>
        </h1>
    );
};

export default TestimonialPage;
