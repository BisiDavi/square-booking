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
      locations: [],
      team: [],
    },
    image: null,
    allVariations: [],
    "blockextratime-service": false,
    "pricetype-service": "FIXED_PRICING",
    "duration-minutes-duration-service": 20,
    "bookablebycustomersonline-service": true,
    locations: [],
    team: [],
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
    updateCheckBox(state, action) {
      const { name, data } = action.payload;
      if (!state.form[name].includes(data)) {
        state.form[name] = [...state.form[name], data];
      } else {
        const tempState = state.form[name].filter(
          (item: string) => item !== data
        );
        state.form[name] = tempState;
      }
    },
    updateVariationCheckBox(state, action) {
      const { name, data } = action.payload;
      if (!state.form.variation[name].includes(data)) {
        state.form.variation[name] = [...state.form.variation[name], data];
      } else {
        const tempState = state.form.variation[name].filter(
          (item: string) => item !== data
        );
        state.form.variation[name] = tempState;
      }
    },
    resetVariation(state) {
      state.form.variation = {
        "variationpricetype-service": "FIXED_PRICING",
        "duration-minutes-variationduration-service": 20,
        "variationblockextratime-service": false,
        "variationbookablebycustomersonline-service": true,
        locations: [],
        team: [],
      };
    },
    updateImage(state, action) {
      state.form.image = action.payload;
    },
    resetForm(state) {
      state.form = {
        variation: {
          "variationpricetype-service": "FIXED_PRICING",
          "duration-minutes-variationduration-service": 20,
          "variationblockextratime-service": false,
          "variationbookablebycustomersonline-service": true,
          locations: [],
          team: [],
        },
        image: null,
        allVariations: [],
        "blockextratime-service": false,
        "pricetype-service": "FIXED_PRICING",
        "duration-minutes-duration-service": 20,
        "bookablebycustomersonline-service": true,
        locations: [],
        team: [],
      };
    },
  },
});

export const {
  updateForm,
  updateVariation,
  updateAllVariations,
  updateVariationCheckBox,
  updateCheckBox,
  resetVariation,
  resetForm,
  updateImage,
} = FormSlice.actions;
export default FormSlice.reducer;
