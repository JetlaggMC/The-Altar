ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:weak_synthetic_single_cable'})
	event.remove({ output: 'gtceu:weak_synthetic_double_cable'})
	event.remove({ output: 'gtceu:weak_synthetic_quadruple_cable'})
	event.remove({ output: 'gtceu:weak_synthetic_octal_cable'})
	event.remove({ output: 'gtceu:weak_synthetic_hex_cable'})

  event.recipes.create.sequenced_assembly('gtceu:red_alloy_single_cable','gtceu:red_alloy_single_wire', [
		event.recipes.createFilling('gtceu:red_alloy_single_wire', ['gtceu:red_alloy_single_wire', Fluid.of('kubejs:crude_insulator', 36)]),
		event.recipes.createPressing('gtceu:red_alloy_single_wire','gtceu:red_alloy_single_wire')
	]).transitionalItem('gtceu:red_alloy_single_wire').loops(1)
   event.recipes.create.sequenced_assembly('gtceu:glowing_single_cable','gtceu:glowing_single_wire', [
		event.recipes.createFilling('gtceu:glowing_single_wire', ['gtceu:glowing_single_wire', Fluid.of('kubejs:crude_insulator', 36)]),
		event.recipes.createPressing('gtceu:glowing_single_wire','gtceu:glowing_single_wire')
	]).transitionalItem('gtceu:glowing_single_wire').loops(1)
   event.recipes.create.sequenced_assembly('gtceu:blazing_single_cable','gtceu:blazing_single_wire', [
		event.recipes.createFilling('gtceu:blazing_single_wire', ['gtceu:blazing_single_wire', Fluid.of('kubejs:crude_insulator', 36)]),
		event.recipes.createPressing('gtceu:blazing_single_wire','gtceu:blazing_single_wire')
	]).transitionalItem('gtceu:blazing_single_wire').loops(1)
	
	
		event.recipes.gtceu.assembler('weak_synthetic_single_cable')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_single_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator'),36)
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_single_cable'))
		.duration(100)
		.EUt(7)
		event.recipes.gtceu.assembler('weak_synthetic_double_cable')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_double_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator'),36)
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_double_cable'))
		.duration(100)
		.EUt(7)
		event.recipes.gtceu.assembler('weak_synthetic_quadruple_cable')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_quadruple_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator'),72)
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_quadruple_cable'))
		.duration(100)
		.EUt(7)
		event.recipes.gtceu.assembler('weak_synthetic_octal_cable')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_octal_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator'),108)
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_octal_cable'))
		.duration(100)
		.EUt(7)
		event.recipes.gtceu.assembler('weak_synthetic_hex_cable')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_hex_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator'),180)
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_hex_cable'))
		.duration(100)
		.EUt(7)
})