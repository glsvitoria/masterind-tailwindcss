import { LogOut } from 'lucide-react'

export const Profile = () => {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/glsvitoria.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Guilherme Vitória
        </span>
        <span className="truncate text-sm text-zinc-500">
          guivitoria2010@hotmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
