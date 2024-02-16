import InputTextForm from './ui/input-text-form';
import Image from 'next/image';

function Header({ title }: { title : any}) {
    return <h1>{title ? title: 'Hold on'}</h1>;
}

export default function Home() {
    return(
        <main>
            <div>
                <Header title="Toxicity predictor" /> 
                <div className='flex'>
                  <InputTextForm></InputTextForm>
                  <Image
                      src="happy.svg"
                      width={50}
                      height={50}
                      className="hidden md:block"
                      alt="default emotion"
                  />
                </div>

            </div>
        </main>
    );
}