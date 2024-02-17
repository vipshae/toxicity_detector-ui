import InputTextForm from './ui/input-text-form';
import Image from 'next/image';

function Header({ title }: { title : any}) {
    return <h1 className='text-3xl font-bold underline left-3'>{title ? title: 'Hold on'}</h1>;
}

export default function Home() {
    return(
        <main>
            <div className='space-y-10 ml-3'>
                <Header title="Toxicity Predictor" /> 
                <InputTextForm></InputTextForm>
            </div>
            <div className='flex flex-row space-y-4 ml-3 mt-9'>
                    Result:
                    <Image
                        src="happy.svg"
                        width={30}
                        height={25}
                        className='ml-2'
                        alt="default emotion"
                    />
            </div>
        </main>
    );
}