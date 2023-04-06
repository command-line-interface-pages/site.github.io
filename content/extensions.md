---
title: "Common extensions"
date: 2023-03-12T19:16:53+10:00
draft: false
---

# Introduction

There are common extensions suitable for all repositories.

## List

{{% extension_list %}}

## Additions to extensions

As some extensions don't provide useful stuff we want to use for some or another
reason we put it here.

### Snippets for GitHub workflows

Each snippet has a single char prefix as there is no ability to apply snippets
to just GitHub workflow files in YAML Red Hat extension.

{{< code language="json" title="Snippets" id="1" expand="Show"
    collapse="Hide" isCollapsed="true" >}}
{
    "workflow not": {
        "description": "! operator",
        "prefix": "w:not",
        "body": [
            "!${1:expression}"
        ]
    },
    "workflow compare to": {
        "description": "comparison operator",
        "prefix": "w:compare-to",
        "body": [
            "${1:expression} ${2|<,>,<=,>=,==,!=|} ${3:expression}"
        ]
    },
    "workflow and": {
        "description": "&& operator",
        "prefix": "w:and",
        "body": [
            "${1:expression} && ${2:expression}"
        ]
    },
    "workflow or": {
        "description": "|| operator",
        "prefix": "w:or",
        "body": [
            "${1:expression} || ${2:expression}"
        ]
    },
    "workflow description": {
        "description": "step or job description",
        "prefix": "w:description",
        "body": [
            "${1|Build,Lint,Test|} with ${2|`,',\"|}${3:tool}$2"
        ]
    },
    "workflow command": {
        "description": "command",
        "prefix": "w:command",
        "body": [
            "echo \"::${1|debug,notice,error,endgroup,echo,add-mask,group,warning|} ${2:parameter=value...}::${3:value}\""
        ]
    },
    "workflow trigger": {
        "description": "trigger definition",
        "prefix": "w:trigger",
        "body": [
            "on:",
            "  ${1:event}:",
            "    branches:",
            "    - ${2:branch}",
            "",
            "  workflow_dispatch:"
        ]
    },
    "workflow step": {
        "description": "step definition",
        "prefix": "w:step",
        "body": [
            "- name: ${1:name}",
            "  run: |",
            "    $0"
        ]
    },
    "workflow job": {
        "description": "job definition",
        "prefix": "w:job",
        "body": [
            "${1:job}:",
            "  name: ${2:name}",
            "  runs-on: ${3:os}",
            "  steps:",
            "  - uses: actions/checkout@v${4:3}",
            "  - run: |",
            "      $0"
        ]
    },
    "workflow contains function": {
        "description": "'contains' function",
        "prefix": "w:contains",
        "body": [
            "contains(${1:input}, ${2:item})"
        ]
    },
    "workflow startsWith function": {
        "description": "'startsWith' function",
        "prefix": "w:startsWith",
        "body": [
            "startsWith(${1:input}, ${2:item})"
        ]
    },
    "workflow endsWith function": {
        "description": "'endsWith' function",
        "prefix": "w:endsWith",
        "body": [
            "endsWith(${1:input}, ${2:item})"
        ]
    },
    "workflow format function": {
        "description": "'format' function",
        "prefix": "w:format",
        "body": [
            "format(${1:format}, ${2:replacement...})"
        ]
    },
    "workflow join function": {
        "description": "'join' function",
        "prefix": "w:join",
        "body": [
            "join(${1:input}, ${2:separator})"
        ]
    },
    "workflow toJSON function": {
        "description": "'toJSON' function",
        "prefix": "w:toJSON",
        "body": [
            "toJSON(${1:input})"
        ]
    },
    "workflow fromJSON function": {
        "description": "'fromJSON' function",
        "prefix": "w:fromJSON",
        "body": [
            "fromJSON(${1:input})"
        ]
    },
    "workflow hashFiles function": {
        "description": "'hashFiles' function",
        "prefix": "w:hashFiles",
        "body": [
            "hashFiles(${1:path})"
        ]
    },
    "workflow success function": {
        "description": "'success' function",
        "prefix": "w:success",
        "body": [
            "success()"
        ]
    },
    "workflow always function": {
        "description": "'always' function",
        "prefix": "w:always",
        "body": [
            "always()"
        ]
    },
    "workflow cancelled function": {
        "description": "'cancelled' function",
        "prefix": "w:cancelled",
        "body": [
            "cancelled()"
        ]
    },
    "workflow failure function": {
        "description": "'failure' function",
        "prefix": "w:failure",
        "body": [
            "failure()"
        ]
    },
    "workflow github context": {
        "description": "'github' context",
        "prefix": "w:github",
        "body": [
            "${{ github.${1|action,action_path,action_ref,action_repository,action_status,actor,actor_id,api_url,base_ref,env,event,event_name,event_path,graphql_url,head_ref,job,job_workflow_sha,path,ref,ref_name,ref_protected,ref_type,repository,repository_id,repository_owner,repository_owner_id,repositoryUrl,retention_days,run_id,run_number,run_attempt,secret_source,server_url,sha,token,triggering_actor,workflow,workflow_ref,workflow_sha,workspace|} }}"
        ]
    },
    "workflow env context": {
        "description": "'env' context",
        "prefix": "w:env",
        "body": [
            "${{ env.${1:variable} }}"
        ]
    },
    "workflow vars context": {
        "description": "'vars' context",
        "prefix": "w:vars",
        "body": [
            "${{ vars.${1:variable} }}"
        ]
    },
    "workflow job context": {
        "description": "'job' context",
        "prefix": "w:job",
        "body": [
            "${{ job.${1|container,container.id,container.network,services,services.SERVICE_ID.id,services.SERVICE_ID.network,services.SERVICE_ID.ports,status|} }}"
        ]
    },
    "workflow jobs context": {
        "description": "'jobs' context",
        "prefix": "w:jobs",
        "body": [
            "${{ jobs.${1|JOB_ID.result,JOB_ID.outputs,JOB_ID.outputs.OUTPUT_NAME|} }}"
        ]
    },
    "workflow steps context": {
        "description": "'steps' context",
        "prefix": "w:steps",
        "body": [
            "${{ jobs.${1|STEP_ID.outputs,STEP_ID.conclusion,STEP_ID.outcome,STEP_ID.outputs.OUTPUT_NAME|} }}"
        ]
    },
    "workflow runner context": {
        "description": "'runner' context",
        "prefix": "w:runner",
        "body": [
            "${{ jobs.${1|name,os,arch,temp,tool_cache,debug|} }}"
        ]
    },
    "workflow secrets context": {
        "description": "'secrets' context",
        "prefix": "w:secrets",
        "body": [
            "${{ secrets.${1|GITHUB_TOKEN,SECRET_NAME|} }}"
        ]
    },
    "workflow strategy context": {
        "description": "'strategy' context",
        "prefix": "w:strategy",
        "body": [
            "${{ strategy.${1|fail-fast,job-index,job-total,max-parallel|} }}"
        ]
    },
    "workflow matrix context": {
        "description": "'matrix' context",
        "prefix": "w:matrix",
        "body": [
            "${{ matrix.${1|property_name|} }}"
        ]
    },
    "workflow needs context": {
        "description": "'needs' context",
        "prefix": "w:needs",
        "body": [
            "${{ matrix.${1|JOB_ID,JOB_ID.outputs,JOB_ID.outputs.OUTPUT_NAME,JOB_ID.result|} }}"
        ]
    },
    "workflow inputs context": {
        "description": "'inputs' context",
        "prefix": "w:inputs",
        "body": [
            "${{ inputs.${1|NAME|} }}"
        ]
    },
    "bash if": {
        "description": "if operator",
        "prefix": "b:if",
        "body": [
            "if ${1:condition}; then",
            "\t$0",
            "fi"
        ]
    },
    "bash if else": {
        "description": "if else operator",
        "prefix": "b:if-else",
        "body": [
            "if ${1:condition}; then",
            "\t${2:echo}",
            "else",
            "\t$0",
            "fi"
        ]
    },
    "bash while": {
        "description": "while operator",
        "prefix": "b:while",
        "body": [
            "while ${1:condition}; do",
            "\t$0",
            "done"
        ]
    },
    "bash until": {
        "description": "until operator",
        "prefix": "b:until",
        "body": [
            "until ${1:condition}; do",
            "\t$0",
            "done"
        ]
    },
    "bash for": {
        "description": "for operator",
        "prefix": "b:for",
        "body": [
            "for ${1:variable} in ${2:list}; do",
            "\t$0",
            "done"
        ]
    },
    "cmd if": {
        "description": "if operator",
        "prefix": "c:if",
        "body": [
            "if ${1:condition} (",
            "\t$0",
            ")"
        ]
    },
    "cmd if else": {
        "description": "if else operator",
        "prefix": "c:if-else",
        "body": [
            "if ${1:condition} (",
            "\t${2:echo}",
            ") else (",
            "\t$0",
            ")"
        ]
    },
    "cmd for": {
        "description": "for operator",
        "prefix": "c:for",
        "body": [
            "for %%${1:variable} in (${2:list}) do (",
            "\t$0",
            ")"
        ]
    },
    "pwsh if": {
        "description": "if operator",
        "prefix": "p:if",
        "body": [
            "if (${1:condition})",
            "{",
            "\t$0",
            "}"
        ]
    },
    "pwsh if else": {
        "description": "if else operator",
        "prefix": "p:if-else",
        "body": [
            "if (${1:condition})",
            "{",
            "\t${2:echo}",
            "}",
            "else",
            "{",
            "\t$0",
            "}"
        ]
    },
    "pwsh while": {
        "description": "while operator",
        "prefix": "p:while",
        "body": [
            "while (${1:condition})",
            "{",
            "\t$0",
            "}"
        ]
    },
    "pwsh do": {
        "description": "do operator",
        "prefix": "p:do",
        "body": [
            "do",
            "{",
            "\t$0",
            "}",
            "while (${1:condition})"
        ]
    },
    "pwsh for": {
        "description": "for operator",
        "prefix": "p:for",
        "body": [
            "for (${1:variable}=${2:value}; ${3:condition}; ${4:command})",
            "{",
            "\t$0",
            "}"
        ]
    },
    "pwsh foreach": {
        "description": "foreach operator",
        "prefix": "p:foreach",
        "body": [
            "for (${1:item} in ${2:list})",
            "{",
            "\t$0",
            "}"
        ]
    },
    "env change directory": {
        "description": "directory change",
        "prefix": "e:directory-change",
        "body": [
            "sed ${1|--chdir,-C|} ${2:command}"
        ]
    },
    "env ignore environment": {
        "description": "environment ignore",
        "prefix": "e:environment-ignore",
        "body": [
            "sed ${1|--ignore-environment,-i|} ${2:command}"
        ]
    },
    "sed print": {
        "description": "line print",
        "prefix": "s:print",
        "body": [
            "sed '' ${1:path/to/file}"
        ]
    },
    "sed filter by line pattern": {
        "description": "line pattern filter",
        "prefix": "s:filter-by-line-pattern",
        "body": [
            "sed ${1|--regexp-extended,-E|} ${2|--quiet,-n|} '/${3:pattern}/p' ${4:path/to/file}"
        ]
    },
    "sed filter by line number": {
        "description": "line number filter",
        "prefix": "s:filter-by-line-number",
        "body": [
            "sed ${1|--regexp-extended,-E|} ${2|--quiet,-n|} '${3:number}p' ${4:path/to/file}"
        ]
    },
    "sed filter by line numbers": {
        "description": "line number filter",
        "prefix": "s:filter-by-line-numbers",
        "body": [
            "sed ${1|--regexp-extended,-E|} ${2|--quiet,-n|} '${3:from},${4:to}p' ${5:path/to/file}"
        ]
    },
    "sed replace single": {
        "description": "single replacement",
        "prefix": "s:replace-first",
        "body": [
            "sed ${1|--regexp-extended,-E|} 's/${2:pattern}/${3:replacement}/' ${4:path/to/file}"
        ]
    },
    "sed replace globally": {
        "description": "global replacement",
        "prefix": "s:replace-all",
        "body": [
            "sed ${1|--regexp-extended,-E|} 's/${2:pattern}/${3:replacement}/g' ${4:path/to/file}"
        ]
    },
    "sed transliterate": {
        "description": "transliteration",
        "prefix": "s:transliterate",
        "body": [
            "sed ${1|--regexp-extended,-E|} 'y/${2:source-characters}/${3:replacement-characters}/g' ${4:path/to/file}"
        ]
    },
    "awk print": {
        "description": "line print",
        "prefix": "a:print",
        "body": [
            "awk '{ print $0 }' ${1:path/to/file}"
        ]
    },
    "awk filter by line pattern": {
        "description": "line pattern filter",
        "prefix": "a:filter-by-line-pattern",
        "body": [
            "awk '/${1:pattern}/' ${2:path/to/file}"
        ]
    },
    "awk filter by line number": {
        "description": "line number filter",
        "prefix": "a:filter-by-line-number",
        "body": [
            "awk 'NR == ${1:number}' ${2:path/to/file}"
        ]
    },
    "awk filter by line numbers": {
        "description": "line number filter",
        "prefix": "a:filter-by-line-numbers",
        "body": [
            "awk 'NR >= ${1:from} && NR <= ${2:to}' ${3:path/to/file}"
        ]
    },
    "awk replace single": {
        "description": "single replacement",
        "prefix": "a:replace-first",
        "body": [
            "awk '{ sub(\"${1:pattern}\", \"${2:replacement}\") }' ${3:path/to/file}"
        ]
    },
    "awk replace globally": {
        "description": "global replacement",
        "prefix": "a:replace-all",
        "body": [
            "awk '{ gsub(\"${1:pattern}\", \"${2:replacement}\") }' ${3:path/to/file}"
        ]
    }
}
{{< /code >}}
