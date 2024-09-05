interface ModalInterface {
  dialogRef: React.RefObject<HTMLDialogElement>
}

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className='mb-2 marker:text-blue-800'>{children}</li>
)

const Modal = ({ dialogRef }: ModalInterface) => {
  return (
    <dialog
      className='max-w-2xl p-8 shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-slate-300 rounded'
      ref={dialogRef}
    >
      <header className='flex gap-4 justify-between items-start mb-4'>
        <h2 className='text-2xl font-bold'>
          Dieses Feature ist wie Handyempfang auf dem Land: Leider nicht
          verfügbar.
        </h2>
        <button onClick={() => dialogRef.current?.close()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='size-8 hover:stroke-blue-600'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </button>
      </header>
      <p>
        Liebes Team von The Key – Technology. Eure Hausaufgabe hat mir viel
        Freude bereitet. Es gibt noch ein paar offene Punkte, bei denen ich ein
        bisschen Unterstützung gebraucht hätte:
      </p>
      <ul className='list-disc m-4'>
        <ListItem>
          <strong>Pagination:</strong> Normalerweise würde es statt diesem
          Button hier auch eine Infinite-Scroll-Funktion mit einem{' '}
          <code>Intersection-Observer</code> geben. Theoretisch war mir der
          Ansatz klar, dass ich ein <code>Relay-Fragment</code> mit{' '}
          <code>usePaginationFragment</code> verwenden konnte, um mit der{' '}
          <code>loadNext</code>-Funktion die neuen Daten zu fetchen. Tja, ich
          habe den Bug nur leider nicht gefunden.
        </ListItem>
        <ListItem>
          <strong>Refresh-Token-Rotation:</strong>. Nachdem der User eingeloggt
          ist, wird es nach dem Session-Time-Out problematisch. Da ich zum
          ersten mal mit Relay gearbeitet habe, war mir nicht klar, wie man den
          Access-Token & Refresh-Token austauscht.
        </ListItem>
        <ListItem>
          <strong>Tests:</strong> Das Zusammenspiel von <i>TypeScript</i>,{' '}
          <i>Babel</i> und <i>Vite</i> mit{' '}
          <i>Jest und der React Testing Library</i> wollte leider nicht so, wie
          ich es wollte. Ich bin mir sicher, dass es nur eine Frage der
          Konfiguration gewesen wäre.
        </ListItem>
      </ul>
      <p>
        <strong>Mein Learning:</strong> Initiale Setups von neuen Projekten
        haben ihre eigenen Herausforderungen. Sobald ein Projekt gut aufgesetzt
        ist, gehen die nächsten Schritte meist reibungsloser.
      </p>
    </dialog>
  )
}

export default Modal
