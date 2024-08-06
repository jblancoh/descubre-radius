import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Framework {
  src: string;
  alt: string;
}

interface Frameworks {
  analytics: Framework[];
  tech: Framework[];
}

export const frameworks: Frameworks = {
  tech: [
    { src: "/img/frameworks/sap-erp.jpg", alt: "SAP ERP" },
    { src: "/img/frameworks/sas.jpg", alt: "SAS" },
    { src: "/img/frameworks/oracle-e-business-suite.jpg", alt: "Oracle E-Business Suite" },
    { src: "/img/frameworks/my-sql.jpg", alt: "MySQL" },
    { src: "/img/frameworks/microsoft-sql-server.jpg", alt: "Microsoft SQL Server" },
    { src: "/img/frameworks/teradata.jpg", alt: "Teradata" },
    { src: "/img/frameworks/cyber-ark.jpg", alt: "CyberArk" },
    { src: "/img/frameworks/veracode.jpg", alt: "Veracode" },
    { src: "/img/frameworks/cloudera.jpg", alt: "Cloudera" },
    { src: "/img/frameworks/horton-works.jpg", alt: "Hortonworks" },
    { src: "/img/frameworks/hbase.jpg", alt: "HBase" },
    { src: "/img/frameworks/impala.jpg", alt: "Impala" },
    { src: "/img/frameworks/hive.jpg", alt: "Hive" },
    { src: "/img/frameworks/apache-spark.jpg", alt: "Apache Spark" },
    { src: "/img/frameworks/apache-kafka.jpg", alt: "Apache Kafka" },
    { src: "/img/frameworks/docker.png", alt: "Docker" },
    { src: "/img/frameworks/alteryx.png", alt: "Alteryx" },
    { src: "/img/frameworks/dataiku.jpg", alt: "Dataiku" },
    { src: "/img/frameworks/datameer.jpg", alt: "Datameer" },
    { src: "/img/frameworks/sentry.jpg", alt: "Sentry" },
    { src: "/img/frameworks/firebase.jpg", alt: "Firebase" },
    { src: "/img/frameworks/expressjs.jpg", alt: "ExpressJS" },
    { src: "/img/frameworks/angular.jpg", alt: "Angular" },
    { src: "/img/frameworks/react.jpg", alt: "React" },
    { src: "/img/frameworks/red-hat.jpg", alt: "Red Hat" },
    { src: "/img/frameworks/rabbit-mq.jpg", alt: "RabbitMQ" },
    { src: "/img/frameworks/nodejs.jpg", alt: "NodeJS" },
    { src: "/img/frameworks/google-cloud.jpg", alt: "Google Cloud" },
    { src: "/img/frameworks/aws.jpg", alt: "AWS" },
    { src: "/img/frameworks/azure.jpg", alt: "Microsoft Azure" },
    { src: "/img/frameworks/net.jpg", alt: ".NET" },
    { src: "/img/frameworks/microsoft-dynamics-crm.jpg", alt: "Microsoft Dynamics CRM" },
    { src: "/img/frameworks/vmware.jpg", alt: "VMware" },
    { src: "/img/frameworks/python.png", alt: "Python" },
    { src: "/img/frameworks/django.jpg", alt: "Django" },
    { src: "/img/frameworks/java.jpg", alt: "Java" },
    { src: "/img/frameworks/tableau.png", alt: "Tableau" },
    { src: "/img/frameworks/matlab.jpg", alt: "Matlab" },
    { src: "/img/frameworks/spec-flow.jpg", alt: "SpecFlow" },
    { src: "/img/frameworks/progress.jpg", alt: "Progress" },
  ],
  analytics: [
    { src: "/img/frameworks/alteryx.png", alt: "Alteryx" },
    { src: "/img/frameworks/ansible.png", alt: "Ansible" },
    { src: "/img/frameworks/apache-airflow.png", alt: "Apache Airflow" },
    { src: "/img/frameworks/apache-hadoop.png", alt: "Apache Hadoop" },
    { src: "/img/frameworks/apache-spark.png", alt: "Apache Spark" },
    { src: "/img/frameworks/data-bricks.png", alt: "Data Bricks" },
    { src: "/img/frameworks/docker.png", alt: "Docker" },
    { src: "/img/frameworks/dremio.png", alt: "Dremio" },
    { src: "/img/frameworks/git.png", alt: "Git" },
    { src: "/img/frameworks/hashicorp-vault.png", alt: "Hashicorp Vault" },
    { src: "/img/frameworks/jenkins.png", alt: "Jenkins" },
    { src: "/img/frameworks/kubernetes.png", alt: "Kubernetes" },
    { src: "/img/frameworks/microsoft-azure.png", alt: "Microsoft Azure" },
    { src: "/img/frameworks/owasp.png", alt: "OWASP" },
    { src: "/img/frameworks/python.png", alt: "Python" },
    { src: "/img/frameworks/power-bi.png", alt: "PowerBI" },
    { src: "/img/frameworks/tableau.png", alt: "Tableau" },
    { src: "/img/frameworks/zap.png", alt: "ZAP" },
  ]
}
