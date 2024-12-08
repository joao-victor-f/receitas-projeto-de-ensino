import React from "react";
import { AddAPhotoButton } from "./AddAPhotoButton";
import { AddButton } from "./AddButton";
import { CuisineDropdown } from "./CuisineDropdown";
import { IngredientListing } from "./IngredientListing";
import { InputFieldWoLabel } from "./InputFieldWoLabel";
import { Label } from "./Label";
import { RemoveButton } from "./RemoveButton";
import { StepsAddStep } from "./StepsAddStep";
import divider2 from "./divider-2.svg";
import divider3 from "./divider-3.svg";
import divider4 from "./divider-4.svg";
import divider5 from "./divider-5.svg";
import divider from "./divider.svg";
import image from "./image.svg";
import "./criar-receitas.module.css";

export const CriarReceitas = () => {
    return (
        <div className="add-recipe-form">
            <div className="add-recipe-inputs">
                <div className="add-a-recipe-photo">
                    <div className="text-wrapper-2">Agregar una receta</div>

                    <p className="p">
                        ¿Te sientes como un Picasso de cocina? ¡Queremos ver tu obra
                        maestra! Añade tu receta y muestra tu creatividad culinaria.
                    </p>

                    <div className="upload-image">
                        <AddAPhotoButton
                            className="add-a-photo-button-instance"
                            groupClassName="add-a-photo-button-2"
                            property1="default"
                            text="Añadir foto"
                            vector="vector-6-3.svg"
                        />
                    </div>

                    <img className="divider" alt="Divider" src={divider} />

                    <img className="img" alt="Divider" src={image} />

                    <img className="divider-2" alt="Divider" src={divider2} />

                    <div className="servings-prep-time">
                        <div className="title-input">
                            <Label
                                className="design-component-instance-node-3"
                                property1="required"
                                text="Porciones"
                            />
                            <InputFieldWoLabel
                                className="input-field-wo-label-5"
                                divClassName="input-field-wo-label-6"
                                inputText="e.g., 4"
                                property1="default"
                            />
                        </div>

                        <div className="prep-time-input">
                            <div className="label-wrapper">
                                <Label
                                    className="design-component-instance-node-3"
                                    property1="required"
                                    text="Tiempo de preparación"
                                />
                            </div>

                            <div className="hrs-mins">
                                <InputFieldWoLabel
                                    className="input-field-wo-label-7"
                                    divClassName="input-field-wo-label-8"
                                    inputText="hrs"
                                    property1="default"
                                />
                                <InputFieldWoLabel
                                    className="input-field-wo-label-7"
                                    divClassName="input-field-wo-label-8"
                                    inputText="mins"
                                    property1="default"
                                />
                            </div>
                        </div>

                        <div className="prep-time-input-2">
                            <div className="label-wrapper">
                                <Label
                                    className="design-component-instance-node-3"
                                    property1="required"
                                    text="Tiempo de cocción"
                                />
                            </div>

                            <div className="hrs-mins">
                                <InputFieldWoLabel
                                    className="input-field-wo-label-7"
                                    divClassName="input-field-wo-label-8"
                                    inputText="hrs"
                                    property1="default"
                                />
                                <InputFieldWoLabel
                                    className="input-field-wo-label-7"
                                    divClassName="input-field-wo-label-8"
                                    inputText="mins"
                                    property1="default"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="recipe-title">
                        <div className="title-input-2">
                            <Label
                                className="design-component-instance-node-3"
                                property1="required"
                                text="Título de la receta"
                            />
                            <InputFieldWoLabel
                                className="input-field-wo-label-9"
                                divClassName="input-field-wo-label-10"
                                inputText="Introduce el título de tu receta"
                                property1="default"
                            />
                        </div>

                        <div className="title-input-2">
                            <Label
                                className="design-component-instance-node-3"
                                property1="required"
                                text="Descripción"
                            />
                            <InputFieldWoLabel
                                className="input-field-wo-label-11"
                                divClassName="input-field-wo-label-10"
                                inputText="Describe tu receta de una manera que haga la boca agua."
                                property1="default"
                            />
                        </div>
                    </div>
                </div>

                <div className="ingredients">
                    <div className="ingredients-2">
                        <div className="ingredients-3">
                            <p className="text-wrapper-3">
                                Enumere un ingrediente por línea, especificando cantidades (1,
                                2), medidas (tazas, cucharas) y cualquier detalle de preparación
                                (picado, tamizado) junto con el artículo.
                            </p>

                            <Label
                                className="label-instance"
                                property1="required"
                                text="Ingredientes"
                            />
                        </div>

                        <IngredientListing
                            addButtonText="+ Agregar ingrediente"
                            className="design-component-instance-node-3"
                            property1="four"
                            reOrderListRemoveInputFieldWoLabelDivClassName="ingredient-listing-instance"
                            reOrderListRemoveInputFieldWoLabelDivClassName1="ingredient-listing-instance"
                            reOrderListRemoveInputFieldWoLabelDivClassName2="ingredient-listing-instance"
                            reOrderListRemoveInputFieldWoLabelDivClassNameOverride="ingredient-listing-instance"
                            reOrderListRemoveInputFieldWoLabelInputText="Cantidad"
                            reOrderListRemoveInputFieldWoLabelInputText1="Producto"
                            reOrderListRemoveInputFieldWoLabelInputText2="Cantidad"
                            reOrderListRemoveInputFieldWoLabelInputText3="Producto"
                            reOrderListRemoveInputFieldWoLabelInputText4="Cantidad"
                            reOrderListRemoveInputFieldWoLabelInputText5="Producto"
                            reOrderListRemoveInputFieldWoLabelInputText6="Cantidad"
                            reOrderListRemoveInputFieldWoLabelInputText7="Producto"
                            reOrderListRemoveMeasurementDropdownText="Medición"
                            reOrderListRemoveMeasurementDropdownText1="Medición"
                            reOrderListRemoveMeasurementDropdownText2="Medición"
                            reOrderListRemoveMeasurementDropdownText3="Medición"
                        />
                    </div>

                    <img className="divider-3" alt="Divider" src={divider3} />

                    <div className="instructions">
                        <div className="div-3">
                            <Label
                                className="design-component-instance-node-3"
                                property1="required"
                                text="Instrucciones"
                            />
                            <p className="text-wrapper-4">
                                Divide tu receta en instrucciones claras paso a paso.
                            </p>

                            <AddButton
                                className="add-button-3"
                                divClassName="add-button-2"
                                property1="default"
                                text="+ Agregar video o imagen"
                            />
                        </div>

                        <StepsAddStep
                            addButtonText="+ Agregar paso"
                            className="design-component-instance-node-3"
                            override={<RemoveButton className="remove-button-2" />}
                            property1="two"
                            stepDetailsIcon={<RemoveButton className="remove-button-2" />}
                            stepDetailsInputFieldWoLabelInputText="Texto de entrada"
                            stepDetailsInputFieldWoLabelInputText1="Texto de entrada"
                            stepDetailsText="Paso 1"
                            stepDetailsText1="Paso 2"
                        />
                    </div>

                    <img className="divider-3" alt="Divider" src={divider4} />

                    <div className="div-3">
                        <Label
                            className="design-component-instance-node-3"
                            property1="optional"
                            text="Consejos de cocina"
                        />
                        <InputFieldWoLabel
                            className="input-field-wo-label-11"
                            divClassName="input-field-wo-label-10"
                            inputText="¡Comparte tus secretos de cocina! Trucos, intercambios o cualquier consejo sobre el horno para lograr el máximo éxito en la receta."
                            property1="default"
                        />
                    </div>

                    <img className="divider-3" alt="Divider" src={divider5} />

                    <div className="tags">
                        <Label
                            className="design-component-instance-node-3"
                            property1="optional"
                            text="Categoría"
                        />
                        <div className="tag-options">
                            <CuisineDropdown property1="default" text="Tipo de comida" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
