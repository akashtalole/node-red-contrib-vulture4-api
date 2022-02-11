node-red-contrib-vulture4-api
================

Node-RED node for vulture4-api



## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-vulture4-api, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-vulture4-api

## Usage

### Methods

#### GET /darwin/acl/

List of Access Control

     

#### POST /darwin/acl/

Create an Access Control

     

#### GET /darwin/acl/{object_id}

Access Control

    object_id : 
     

#### PUT /darwin/acl/{object_id}

Edit an Access Control

    object_id : 
     

#### GET /darwin/filter/

List filter instances

     

#### GET /darwin/filter/{object_id}/

Get specific filter instance

    object_id : 
     

#### GET /darwin/filter/types/

List filter types

     

#### GET /darwin/filter/{filter_type}/{resssource}

List available ressources for a specific filter type

    filter_type : 
    ressource : 
     

#### GET /darwin/policy/

List policies

     

#### POST /darwin/policy/

Create policy

     

#### GET /darwin/policy/{object_id}/

Get Policy

    object_id : 
     

#### PUT /darwin/policy/{object_id}/

verb to create or update a specific policy based on its ID

    object_id : 
     

#### DELETE /darwin/policy/{object_id}/

Delete a policy based on its ID

    object_id : 
     

#### POST /darwin/policy/{object_id}/{action}/

Action on policy

    object_id : 
    action : 
     

#### GET /system/config/

Get Cluster configuration

     

#### PUT /system/config/

Edit Config

     

#### POST /system/config/{list_type}/

Define Packet Filter Whitelist or Blacklist

    list_type : 
     

#### GET /system/node/

Get all nodes

     

#### GET /system/node/{object_id}/

Get one node

    object_id : 
     

#### POST /system/node/{object_id}/

Update a node

    object_id : 
     

#### PUT /system/node/{object_id}/

Update a node

    object_id : 
     

#### PATCH /system/node/{object_id}/

Update a node

    object_id : 
     

#### GET /system/cluster/

Cluster list

     

#### GET /system/netif/

List of all available network address cards

     

#### POST /system/netif/refresh/

Refresh list of network cards

     

#### GET /system/netaddr/

List of all network address

     

#### GET /system/netaddr/{object_id}/

Get one network address

    object_id : 
     

#### GET /system/pki/get_ca

Get CA certificate

     

#### GET /system/pki/get_cert

Get certificate

     

#### GET /system/tenants

Multi tenants

     

#### POST /system/tenants

Create a tenant

     

#### GET /system/tenants/{object_id}

Multi tenants

    object_id : 
     

#### PUT /system/tenants/{object_id}

Update a tenant

    object_id : 
     

#### DELETE /system/tenants/{object_id}

Delete a tenant

    object_id : 
     

#### GET /system/vm/

Virtual Machines

     

#### GET /system/vm/{object_id}

Virtual Machine

    object_id : 
     

#### GET /system/zfs/

ZFS list

     

#### GET /system/zfs/{object_id}

ZFS

    object_id : 
     

#### POST /system/zfs/{object_id}/{action}

Create ZFS

    object_id : 
    action : 
     

#### GET /workflow/

List of Workflow

     

#### POST /workflow/

Create a workflow

     

#### GET /workflow/{object_id}

Get a workflow configuration

    object_id : 
     

#### POST /workflow/{object_id}

Edit a workflow

    object_id : 
     

#### DELETE /workflow/{object_id}

Delete a workflow

    object_id : 
     

#### GET /authentication/idp/{object_id}

List Groups/Users or Search Users

    object_id : 
    object_type : 
    group_name : 
    search : 
     

#### POST /authentication/idp/users/{object_id}

Create an user

    object_id : 
     

#### PUT /authentication/idp/users/{object_id}

Edit an user

    object_id : 
     

#### DELETE /authentication/idp/users/{object_id}

Delete an user

    object_id : 
     

#### POST /authentication/idp/groups/{object_id}

Create a group

    object_id : 
     


## License

#### Apache-2.0

