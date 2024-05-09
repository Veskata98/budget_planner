interface DatePageProps {
    params: {
        date: string;
    };
}

export default function DatePage({ params }: DatePageProps) {
    return (
        <div>
            <div>{new Date(params.date).toDateString()}</div>
        </div>
    );
}
