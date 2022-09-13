// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'symbiosis:index/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    public /*out*/ readonly caCertificate!: pulumi.Output<string>;
    public /*out*/ readonly certificate!: pulumi.Output<string>;
    /**
     * Cluster API server endpoint
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * When set to true it will deploy a highly available control plane with multiple replicas for redundancy.
     */
    public readonly isHighlyAvailable!: pulumi.Output<boolean | undefined>;
    /**
     * Kubernetes version, see symbiosis.host for valid values or "latest" for the most recent supported version.
     */
    public readonly kubeVersion!: pulumi.Output<string | undefined>;
    /**
     * Cluster name. Changing the name forces re-creation.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateKey!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterState | undefined;
            resourceInputs["caCertificate"] = state ? state.caCertificate : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["isHighlyAvailable"] = state ? state.isHighlyAvailable : undefined;
            resourceInputs["kubeVersion"] = state ? state.kubeVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["isHighlyAvailable"] = args ? args.isHighlyAvailable : undefined;
            resourceInputs["kubeVersion"] = args ? args.kubeVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["caCertificate"] = undefined /*out*/;
            resourceInputs["certificate"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["privateKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    caCertificate?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    /**
     * Cluster API server endpoint
     */
    endpoint?: pulumi.Input<string>;
    /**
     * When set to true it will deploy a highly available control plane with multiple replicas for redundancy.
     */
    isHighlyAvailable?: pulumi.Input<boolean>;
    /**
     * Kubernetes version, see symbiosis.host for valid values or "latest" for the most recent supported version.
     */
    kubeVersion?: pulumi.Input<string>;
    /**
     * Cluster name. Changing the name forces re-creation.
     */
    name?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * When set to true it will deploy a highly available control plane with multiple replicas for redundancy.
     */
    isHighlyAvailable?: pulumi.Input<boolean>;
    /**
     * Kubernetes version, see symbiosis.host for valid values or "latest" for the most recent supported version.
     */
    kubeVersion?: pulumi.Input<string>;
    /**
     * Cluster name. Changing the name forces re-creation.
     */
    name?: pulumi.Input<string>;
    region: pulumi.Input<string>;
}
