module.exports =
{  
 components:{

	'Get_Release': require('./components/Get_Release'),

  
	// Utility components
	'ActionFromVariable' : require('./util/action_from_variable'),
	'SetVariablesFromFile' : require('./util/set_variables_from_file'),
	'SetVariableFromEntityMatches' : require('./util/set_variable_from_entity_matches'),
	'OutputVariables' : require('./util/output_variables'),
	'ConditionalIsNull' : require('./util/conditional_is_null'),
 }
  
};
