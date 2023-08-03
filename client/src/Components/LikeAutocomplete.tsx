"use client"
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Option {
  label: string;
  value: string;
}

interface LikeAutocompleteProps {
  apiUrl: string;
}

const LikeAutocomplete: React.FC<LikeAutocompleteProps> = ({ apiUrl }) => {
  const [options, setOptions] = useState<Option[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    try {
      // Aquí debes hacer la llamada al API utilizando el inputValue para obtener las sugerencias de "like"
      // Por ejemplo, podrías usar fetch o axios para hacer una solicitud GET al apiUrl con el inputValue como parámetro de consulta.
      const response = await fetch(`${apiUrl}${encodeURIComponent(inputValue)}`);
      const data = await response.json();

      console.log(data);
      if (Array.isArray(data.Value)) {
        const newOptions: Option[] = data.Value.map((item: any) => ({
          label: item.Nombre,
          value: item.Nombre,
        }));
        setOptions(newOptions);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label="Categoria"
          variant="outlined"
          onChange={handleInputChange}
        />
      )}
    />
  );
};

export default LikeAutocomplete;
