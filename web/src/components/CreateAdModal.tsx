import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Input } from "../components/form/Input";
import { Game } from "../App";
import { api } from "../api/axios";
import toast from "react-hot-toast";

interface Props {
  data: Game[];
}

export function CreateAdModal({ data }: Props) {
  const [weekDays, setWeekDays] = useState<string[]>();
  const [useVoice, setUseVoice] = useState<boolean>(false);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await api.post(`/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays?.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoice,
      });

      toast.success("Anúncio criado com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Erro ao criar anúncio!");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content
        className="fixed bg-[#2A2634] py-8 px-10 text-white w-[480px]
    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/25"
      >
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <select
              id="game"
              name="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Como te chamam dentro do jogo?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                type="number"
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser 0"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu discord?</label>
              <Input
                type="text"
                id="discord"
                name="discord"
                placeholder="Usuario#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekFays">Quando costuma jogar?</label>
              <div>
                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value="0"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("0") ? "bg-violet-500" : ""
                    }`}
                    title="Domingo"
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("1") ? "bg-violet-500" : ""
                    }`}
                    title="Segunda"
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("2") ? "bg-violet-500" : ""
                    }`}
                    title="Terça"
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("3") ? "bg-violet-500" : ""
                    }`}
                    title="Quarta"
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("4") ? "bg-violet-500" : ""
                    }`}
                    title="Quinta"
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("5") ? "bg-violet-500" : ""
                    }`}
                    title="Sexta"
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    className={`w-8 h-8 rounded bg-zinc-900 ${
                      weekDays?.includes("6") ? "bg-violet-500" : ""
                    }`}
                    title="Sábado"
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="time"
                  id="hourStart"
                  name="hourStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  id="hourEnd"
                  name="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={useVoice}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoice(true);
                } else {
                  setUseVoice(false);
                }
              }}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400 " />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              className="bg-zinc-500 px-5 h-12 rounded-md 
          font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold 
            flex items-center justify-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar seu duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
