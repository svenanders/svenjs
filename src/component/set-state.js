import {updateUI} from './update-ui';
import {saveState} from './save-state';
import {lifeCycle} from './life-cycle';

exports.setState = (state, spec)=> {
	document.getElementById('ui').innerHTML = "";

    saveState(spec.time,state);
	updateUI(spec, spec.render(state));
	lifeCycle(spec);
};