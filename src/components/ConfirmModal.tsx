import { Button } from './buttons';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirmar',
  message = '¿Estás seguro que deseas continuar?',
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50'>
      <div className='bg-light p-6 rounded-lg shadow-xl'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='my-4'>{message}</p>
        <div className='w-fit ml-auto flex justify-end space-x-4'>
          <Button type='button' variant='outline' onClick={onClose}>
            Cancelar
          </Button>
          <Button type='button' className='bg-error border-error focus:ring-error text-light' onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
