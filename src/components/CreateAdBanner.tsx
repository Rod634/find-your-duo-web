import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdForm } from './CreateAdForm';

export function CreateAdBanner() {
    return (
        <Dialog.Root>
            <div className='bg-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8'>
                <div className='bg-[#2A2634] w-full py-6 px-8 flex justify-between items-center'>
                    <div>
                        <strong className='text-2xl text-white' >Não encontrou seu duo?</strong>
                        <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                    </div>

                    <Dialog.Trigger className='py-3 px-4 text-white bg-violet-500 hover:bg-violet-600 rounded flex gap-3'>
                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
                    </Dialog.Trigger>
                </div>
            </div>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                    <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
                    <CreateAdForm />
                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )
}