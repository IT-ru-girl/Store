import { IProduct } from '../../Types.tsx';
import { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';


// export const ProductModal: React.FC<{ open: boolean; onClose: () => void; onSave: (product: IProduct) => void; product?: IProduct; }> = ({ open, onClose, onSave, product }) => {
//   const [formData, setFormData] = useState<IProduct>(
//     product || { id: '', name: '', image:'',  price: 0, count: 0 }
//   );
//
//   const handleChange = (field: keyof IProduct, value: string | number) => {
//     setFormData({ ...formData, [field]: value });
//   };
//
//   const handleSubmit = () => {
//     onSave({ ...formData, id: product?.id || Date.now().toString() });
//     onClose();
//   };
//
//   return (
//     <Modal open={open} onClose={onClose}>
//       <div style={{ padding: '20px', background: 'white', margin: '20px auto', maxWidth: '400px' }}>
//         <TextField
//           fullWidth
//           label="Название товара"
//           value={formData.name}
//           onChange={(e) => handleChange('name', e.target.value)}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Цена"
//           type="number"
//           value={formData.price}
//           onChange={(e) => handleChange('price', +e.target.value)}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Количество"
//           type="number"
//           value={formData.count}
//           onChange={(e) => handleChange('count', +e.target.value)}
//           required
//         />
//         <Button onClick={handleSubmit}>{product ? 'Сохранить изменения' : 'Добавить'}</Button>
//       </div>
//     </Modal>
//   );
// };
