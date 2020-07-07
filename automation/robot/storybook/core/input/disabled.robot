*** Setting ***
Resource         ../_keywords.resource
Suite Setup      Run Keywords
...              Go To    ${components}input--disabled
...              AND    Wait Until Element Is Visible    ${input}


*** Test Cases ***
input is disabled when it is rendered
    Element Should Be Disabled    ${input}

label is disabled when it is rendered
    Element Attribute Value Should Be    ${label}    aria-disabled    true

does not focus input when click on disabled label
    Click Element                 ${label}
    Element Should Be Disabled    ${input}


*** Variables ***
${input}    css:#input-disabled-sample-input
${label}    css:#input-disabled-sample-label
