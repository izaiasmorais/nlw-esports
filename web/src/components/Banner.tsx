import * as Dialog from "@radix-ui/react-dialog";

export function AdBanner() {
  return (
    <div className="pt-1 self-stretch bg-nlw-gradient rounded-lg overflow-hidden mt-8">
      <div
        className="bg-[#2A2634] text-white px-8 py-6   
  flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Não encontrou seu duo?</h1>
          <p className="text-[#a1a1aa]">
            Publique um anúncio para encontrar novos players!
          </p>
        </div>
        <Dialog.Trigger
          className="py-2 px-4 bg-[#8B5CF6] rounded-md flex items-center justify-between 
          gap-1 hover:bg-[#623db8] transition-colors"
        >
          <img src="./search.png" alt="" />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
