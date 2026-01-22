provider "kubernetes" {
  config_path = var.kubeconfig
}

resource "kubernetes_namespace" "cms" {
  metadata {
    name = "simple-cms"
  }
}
