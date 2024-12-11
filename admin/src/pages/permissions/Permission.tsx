import { Button, TextField } from '@mui/material';
import {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import {
  addPermission,
  fetchPermission,
  updatePermission
} from '../../features/permissions/permissionsThunk';
import {RootState, useAppDispatch} from "../../app/store";

interface PermissionProps {
  permissionId?: string | null;
  handleClose?: (permission?: any) => void;
}
const Permission: FC<PermissionProps> = ({ permissionId, handleClose }) => {
  const dispatch = useAppDispatch();
  // Select permission state from Redux store
  const { permission = {}, status, error } = useSelector((state:RootState) => state.permission);

  // Local state to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  // Effect to fetch permission if `permissionId` is provided
  useEffect(() => {
    dispatch(fetchPermission());
  }, []);

  // Sync local state with Redux state when `permission` changes
  useEffect(() => {
    if (permissionId && permission) {
      setFormData({
        name: permission.name || '',
        description: permission.description || '',
      });
    }
  }, [permissionId, permission]);

  // Automatically close modal if the status becomes "succeeded"
  useEffect(() => {
    if (status === 'succeeded') {
      handleClose(permission); // Close the modal
    }
  }, [status]);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (permissionId) {
      dispatch(updatePermission({ permissionId, updatedPermission: formData }));
    } else {
      dispatch(addPermission(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Permission Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        {permissionId ? 'Update' : 'Add'} Permission
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Permission;
