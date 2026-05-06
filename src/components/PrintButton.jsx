import { FaPrint } from 'react-icons/fa'

function PrintButton() {
  return (
    <button className="print-btn" type="button" onClick={() => window.print()}>
      <FaPrint className="btn-icon" aria-hidden="true" />
      <span>Imprimer / Sauvegarder en PDF</span>
    </button>
  )
}

export default PrintButton
