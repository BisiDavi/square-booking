/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type payloadType = { name: string; data: any } | any;

type initialStateType = {
  form: { [key: string]: any };
};

const initialState: initialStateType = {
  form: {
    variation: {
      "variationpricetype-service": "FIXED_PRICING",
      "duration-minutes-variationduration-service": 20,
      "variationblockextratime-service": false,
      "variationbookablebycustomersonline-service": true,
    },
    allVariations: [],
    "blockextratime-service": false,
    "pricetype-service": "FIXED_PRICING",
    "duration-minutes-duration-service": 20,
    "bookablebycustomersonline-service": true,
  },
};

const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<payloadType>) {
      const { name, data } = action.payload;
      state.form[name] = data;
    },
    updateVariation(state, action) {
      const { name, data } = action.payload;
      state.form.variation[name] = data;
    },
    updateAllVariations(state) {
      state.form.allVariations = [
        ...state.form.allVariations,
        state.form.variation,
      ];
    },
    resetVariation(state) {
      state.form.variation = {};
    },
    resetForm(state) {
      state.form = {
        variation: {
          "blockextratime-service": false,
          "pricetype-service": "FIXED_PRICING",
          "duration-minutes-duration-service": 20,
          "bookablebycustomersonline-service": true,
        },
        allVariations: [],
        "blockextratime-service": false,
        "pricetype-service": "FIXED_PRICING",
        "duration-minutes-duration-service": 20,
        "bookablebycustomersonline-service": true,
      };
    },
  },
});

export const {
  updateForm,
  updateVariation,
  updateAllVariations,
  resetVariation,
  resetForm,
} = FormSlice.actions;
export default FormSlice.reducer;
