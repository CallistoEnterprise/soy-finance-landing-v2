import React from "react";
import styles from "./Banner.module.scss";
import Svg from "../../../../components/atoms/Svg";

export default function Banner() {
  return <div className={styles.banner}>
    <div className={styles.text}>
      <div className={styles.textContent}>
        <svg width="573" height="166" viewBox="0 0 573 166" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.7518 0.549993C43.0785 0.29933 47.9038 0.894665 52.2278 2.336C56.6145 3.71466 60.3118 5.81399 63.3198 8.63399C66.3278 11.454 68.5212 14.9007 69.8998 18.974C71.3412 23.0473 71.8112 27.622 71.3098 32.698C71.2472 33.3873 70.6205 34.108 69.4298 34.86C68.2392 35.612 66.9545 36.2387 65.5758 36.74C64.1972 37.2413 62.9438 37.5547 61.8158 37.68C60.7505 37.7427 60.3118 37.492 60.4998 36.928C60.8132 35.8627 61.1578 34.296 61.5338 32.228C61.9725 30.16 61.9412 27.8727 61.4398 25.366C60.8758 22.6713 59.8105 20.1647 58.2438 17.846C56.7398 15.5273 54.8598 13.522 52.6038 11.83C50.4105 10.138 47.9665 8.85333 45.2718 7.97599C42.6398 7.09866 39.9138 6.754 37.0938 6.942C33.0832 7.06733 29.6365 7.85066 26.7538 9.292C23.9338 10.6707 21.5525 12.394 19.6098 14.462C17.6672 16.4673 16.1318 18.692 15.0038 21.136C13.9385 23.58 13.1238 25.93 12.5598 28.186C12.0585 30.442 11.7452 32.4473 11.6198 34.202C11.5572 35.894 11.5885 37.0847 11.7138 37.774C12.4658 42.0353 14.0952 45.7327 16.6018 48.866C19.1085 51.9993 22.0538 54.8507 25.4378 57.42C28.8218 59.9267 32.3625 62.3393 36.0598 64.658C39.8198 66.914 43.3292 69.3893 46.5878 72.084C49.8465 74.716 52.6352 77.6927 54.9538 81.014C57.2725 84.2727 58.6512 88.1893 59.0898 92.764C59.5285 97.464 59.0898 101.443 57.7738 104.702C56.4578 107.898 54.5778 110.499 52.1338 112.504C49.7525 114.572 46.9952 116.076 43.8618 117.016C40.7912 117.956 37.6892 118.457 34.5558 118.52C30.4198 118.645 26.8478 118.175 23.8398 117.11C20.8945 116.045 18.4818 114.885 16.6018 113.632C14.3458 112.128 12.4972 110.436 11.0558 108.556L12.7478 102.54C14.8158 104.733 17.1032 106.645 19.6098 108.274C21.7405 109.715 24.1532 110.969 26.8478 112.034C29.6052 113.162 32.4878 113.632 35.4958 113.444C36.4985 113.381 37.9398 113.099 39.8198 112.598C41.6998 112.097 43.4858 111.157 45.1778 109.778C46.9325 108.337 48.3738 106.363 49.5018 103.856C50.6298 101.349 50.9745 98.028 50.5358 93.892C50.2225 90.9467 48.8125 88.158 46.3058 85.526C43.7992 82.8313 40.7598 80.168 37.1878 77.536C33.6158 74.904 29.7618 72.2093 25.6258 69.452C21.5525 66.632 17.7298 63.6553 14.1578 60.522C10.6485 57.3887 7.67184 53.9733 5.22784 50.276C2.84651 46.5787 1.53051 42.474 1.27984 37.962C0.96651 33.8887 1.34251 29.7213 2.40784 25.46C3.53584 21.136 5.50984 17.188 8.32984 13.616C11.2125 10.044 15.0352 7.06733 19.7978 4.686C24.6232 2.24199 30.6078 0.863326 37.7518 0.549993ZM89.7897 59.018C90.1657 58.9553 90.7923 58.9867 91.6697 59.112C92.547 59.1747 93.4243 59.3627 94.3017 59.676C95.179 59.9893 95.931 60.4907 96.5577 61.18C97.1843 61.8067 97.435 62.684 97.3097 63.812C97.247 64.0627 97.153 65.2533 97.0277 67.384C96.9023 69.452 96.7457 72.0213 96.5577 75.092C96.4323 78.1 96.307 81.3273 96.1817 84.774C96.0563 88.2207 95.9623 91.4167 95.8997 94.362C95.837 97.2447 95.837 99.6887 95.8997 101.694C95.9623 103.637 96.119 104.608 96.3697 104.608C97.059 104.671 97.7483 104.201 98.4377 103.198C99.1897 102.195 99.9103 100.942 100.6 99.438C101.289 97.934 101.947 96.3047 102.574 94.55C103.2 92.7953 103.733 91.166 104.172 89.662C104.673 88.158 105.049 86.9047 105.3 85.902C105.613 84.8993 105.801 84.398 105.864 84.398C105.926 84.398 106.083 84.4293 106.334 84.492C106.647 84.492 106.96 84.5233 107.274 84.586C107.587 84.586 107.869 84.6487 108.12 84.774C108.37 84.8367 108.496 84.962 108.496 85.15C108.496 85.2753 108.308 85.996 107.932 87.312C107.618 88.628 107.148 90.2573 106.522 92.2C105.958 94.08 105.206 96.148 104.266 98.404C103.388 100.597 102.386 102.634 101.258 104.514C100.13 106.331 98.8763 107.867 97.4977 109.12C96.119 110.311 94.6777 110.875 93.1737 110.812C92.359 110.812 91.6697 110.655 91.1057 110.342C90.5417 109.966 90.0403 109.496 89.6017 108.932C89.163 108.368 88.8183 107.741 88.5677 107.052C88.317 106.363 88.0977 105.673 87.9097 104.984C87.0323 106.488 86.061 107.647 84.9957 108.462C83.9303 109.277 82.865 109.872 81.7997 110.248C80.797 110.624 79.8883 110.843 79.0737 110.906C78.259 110.906 77.6637 110.875 77.2877 110.812C76.4103 110.749 75.251 110.467 73.8097 109.966C72.3683 109.402 70.9583 108.305 69.5797 106.676C68.201 104.984 67.0103 102.54 66.0077 99.344C65.0677 96.148 64.629 91.824 64.6917 86.372C64.7543 81.672 65.1617 77.724 65.9137 74.528C66.7283 71.2693 67.6997 68.606 68.8277 66.538C69.9557 64.47 71.209 62.872 72.5877 61.744C73.9663 60.5533 75.2823 59.7073 76.5357 59.206C77.8517 58.7047 78.9797 58.4227 79.9197 58.36C80.9223 58.2347 81.643 58.172 82.0817 58.172C83.0217 58.172 83.8363 58.3913 84.5257 58.83C85.2777 59.206 85.9357 59.7073 86.4997 60.334C87.1263 60.898 87.6277 61.5247 88.0037 62.214C88.4423 62.9033 88.787 63.5613 89.0377 64.188C89.163 62.6213 89.2883 61.3993 89.4137 60.522C89.539 59.582 89.6643 59.0807 89.7897 59.018ZM80.2017 106.3C81.3923 106.3 82.395 106.018 83.2097 105.454C84.0243 104.827 84.6823 104.107 85.1837 103.292C85.7477 102.415 86.1863 101.506 86.4997 100.566C86.8757 99.5633 87.189 98.6233 87.4397 97.746C87.4397 96.1167 87.471 94.2053 87.5337 92.012C87.659 89.756 87.753 87.406 87.8157 84.962C87.941 82.4553 88.0663 79.9487 88.1917 77.442C88.3797 74.9353 88.5363 72.554 88.6617 70.298C88.5363 70.4233 88.4737 70.2353 88.4737 69.734C88.5363 68.9193 88.3797 68.0733 88.0037 67.196C87.6903 66.256 87.2517 65.41 86.6877 64.658C86.1237 63.906 85.497 63.2793 84.8077 62.778C84.1183 62.2767 83.4603 62.026 82.8337 62.026C81.643 62.026 80.5777 62.496 79.6377 63.436C78.7603 64.3133 77.977 65.504 77.2877 67.008C76.5983 68.4493 76.003 70.0787 75.5017 71.896C75.063 73.6507 74.687 75.4053 74.3737 77.16C74.123 78.9147 73.9037 80.544 73.7157 82.048C73.5903 83.552 73.4963 84.7427 73.4337 85.62C73.3083 86.8733 73.277 88.6593 73.3397 90.978C73.465 93.2967 73.747 95.6153 74.1857 97.934C74.6243 100.253 75.3137 102.258 76.2537 103.95C77.1937 105.579 78.5097 106.363 80.2017 106.3ZM121.261 43.978C121.575 43.978 121.7 44.2913 121.637 44.918C121.637 45.482 121.575 46.1087 121.449 46.798C121.261 47.6127 121.011 48.584 120.697 49.712L113.271 49.9C113.146 55.4773 113.052 61.3053 112.989 67.384C112.927 73.4 112.864 79.3533 112.801 85.244C112.801 91.1347 112.801 96.8373 112.801 102.352C112.801 107.804 112.77 112.755 112.707 117.204C112.707 121.653 112.707 125.413 112.707 128.484C112.707 131.555 112.707 133.654 112.707 134.782C112.707 135.91 112.3 136.631 111.485 136.944C110.733 137.32 109.887 137.445 108.947 137.32C108.07 137.195 107.224 136.881 106.409 136.38C105.595 135.941 105.156 135.471 105.093 134.97C105.031 134.719 104.999 133.09 104.999 130.082C104.999 127.074 104.999 123.189 104.999 118.426C104.999 113.663 105.031 108.305 105.093 102.352C105.156 96.336 105.187 90.226 105.187 84.022C105.25 77.818 105.281 71.7707 105.281 65.88C105.344 59.9893 105.375 54.7253 105.375 50.088L100.957 50.182C100.769 50.182 100.613 50.0253 100.487 49.712C100.299 49.336 100.205 48.9287 100.205 48.49C100.143 47.9887 100.205 47.5187 100.393 47.08C100.519 46.6413 100.832 46.3593 101.333 46.234L105.375 45.764V34.766C105.25 33.0113 105.313 30.9747 105.563 28.656C105.814 26.3373 106.315 24.144 107.067 22.076C107.882 20.008 109.041 18.2533 110.545 16.812C112.049 15.3707 113.992 14.65 116.373 14.65C118.629 14.7127 120.478 15.308 121.919 16.436C123.361 17.564 124.269 19.068 124.645 20.948C125.147 23.8933 125.491 26.4 125.679 28.468C125.867 30.4733 125.993 31.8207 126.055 32.51C126.055 32.8233 125.679 33.0427 124.927 33.168C124.238 33.2307 123.423 33.1993 122.483 33.074C121.606 32.9487 120.76 32.7293 119.945 32.416C119.193 32.04 118.786 31.57 118.723 31.006C118.661 29.69 118.629 28.4053 118.629 27.152C118.629 25.836 118.598 24.6767 118.535 23.674C118.473 22.6087 118.316 21.7627 118.065 21.136C117.815 20.4467 117.439 20.102 116.937 20.102C116.436 20.0393 115.841 20.102 115.151 20.29C114.525 20.478 114.18 21.2613 114.117 22.64C113.929 25.5227 113.773 28.8753 113.647 32.698C113.585 36.458 113.491 40.5313 113.365 44.918C114.619 44.7927 115.903 44.6673 117.219 44.542C118.535 44.354 119.883 44.166 121.261 43.978ZM131.584 58.172C134.09 57.9213 136.127 58.548 137.694 60.052C139.323 61.556 140.576 63.4673 141.454 65.786C142.394 68.1047 142.989 70.6113 143.24 73.306C143.553 76.0007 143.616 78.4447 143.428 80.638C142.989 85.338 142.08 89.0353 140.702 91.73C139.386 94.4247 137.882 96.4927 136.19 97.934C134.56 99.3127 132.9 100.19 131.208 100.566C129.516 100.942 128.168 101.13 127.166 101.13C128.043 103.511 129.077 105.109 130.268 105.924C131.458 106.676 132.336 106.989 132.9 106.864C134.529 106.739 136.033 106.237 137.412 105.36C138.79 104.42 140.012 103.261 141.078 101.882C142.206 100.441 143.177 98.874 143.992 97.182C144.869 95.49 145.621 93.8293 146.248 92.2C146.874 90.5707 147.344 89.0667 147.658 87.688C148.034 86.2467 148.316 85.1187 148.504 84.304C148.629 83.9907 149.099 83.8653 149.914 83.928C150.728 83.928 151.198 84.2413 151.324 84.868C151.324 85.056 151.167 85.8393 150.854 87.218C150.54 88.534 150.039 90.1633 149.35 92.106C148.66 93.986 147.783 96.0227 146.718 98.216C145.652 100.347 144.368 102.352 142.864 104.232C141.422 106.049 139.73 107.616 137.788 108.932C135.908 110.185 133.808 110.875 131.49 111C129.422 111.125 127.636 110.781 126.132 109.966C124.628 109.089 123.374 107.992 122.372 106.676C121.369 105.297 120.523 103.793 119.834 102.164C119.207 100.472 118.737 98.874 118.424 97.37C118.11 95.8033 117.891 94.456 117.766 93.328C117.64 92.1373 117.578 91.3227 117.578 90.884C117.578 90.0067 117.609 88.628 117.672 86.748C117.734 84.868 117.891 82.7687 118.142 80.45C118.455 78.0687 118.894 75.6247 119.458 73.118C120.084 70.5487 120.93 68.1987 121.996 66.068C123.061 63.8747 124.346 62.0573 125.85 60.616C127.416 59.1747 129.328 58.36 131.584 58.172ZM125.756 90.508C125.693 92.2 125.724 93.7353 125.85 95.114C125.975 96.4927 126.163 97.7147 126.414 98.78C127.166 98.8427 128.106 98.7487 129.234 98.498C130.424 98.2473 131.584 97.558 132.712 96.43C133.84 95.2393 134.842 93.4533 135.72 91.072C136.597 88.6907 137.161 85.3693 137.412 81.108C137.725 74.2773 137.38 69.2953 136.378 66.162C135.375 62.966 133.871 61.556 131.866 61.932C131.239 62.0573 130.675 62.6527 130.174 63.718C129.672 64.7833 129.171 66.162 128.67 67.854C128.231 69.4833 127.824 71.332 127.448 73.4C127.134 75.4053 126.852 77.4733 126.602 79.604C126.351 81.672 126.132 83.6773 125.944 85.62C125.818 87.5 125.756 89.1293 125.756 90.508ZM170.522 37.868C171.525 37.868 172.089 38.1813 172.214 38.808C172.34 39.372 172.214 40.03 171.838 40.782C171.525 41.4713 171.055 42.1293 170.428 42.756C169.864 43.3827 169.363 43.7587 168.924 43.884C168.736 43.9467 168.298 43.978 167.608 43.978C166.919 43.978 166.01 43.978 164.882 43.978C163.754 43.9153 162.438 43.884 160.934 43.884C159.493 43.8213 157.958 43.7587 156.328 43.696C156.203 47.832 156.046 52.2187 155.858 56.856C155.733 61.4933 155.608 66.068 155.482 70.58C155.42 75.092 155.357 79.416 155.294 83.552C155.232 87.6253 155.2 91.2287 155.2 94.362C155.2 97.4953 155.232 100.002 155.294 101.882C155.42 103.699 155.576 104.608 155.764 104.608C156.454 104.671 157.143 104.201 157.832 103.198C158.584 102.195 159.274 100.942 159.9 99.438C160.59 97.934 161.248 96.3047 161.874 94.55C162.501 92.7953 163.034 91.166 163.472 89.662C163.974 88.158 164.381 86.9047 164.694 85.902C165.008 84.8993 165.196 84.398 165.258 84.398C165.321 84.398 165.478 84.4293 165.728 84.492C166.042 84.492 166.355 84.5233 166.668 84.586C166.982 84.586 167.264 84.6487 167.514 84.774C167.765 84.8367 167.89 84.962 167.89 85.15C167.89 85.2753 167.702 85.996 167.326 87.312C167.013 88.628 166.543 90.2573 165.916 92.2C165.352 94.08 164.6 96.148 163.66 98.404C162.783 100.597 161.749 102.634 160.558 104.514C159.43 106.331 158.177 107.867 156.798 109.12C155.482 110.311 154.041 110.875 152.474 110.812C151.409 110.812 150.5 110.499 149.748 109.872C149.059 109.245 148.495 108.525 148.056 107.71C147.68 106.833 147.398 105.924 147.21 104.984C146.96 104.044 146.834 103.229 146.834 102.54C146.834 102.227 146.866 101.13 146.928 99.25C146.928 97.3073 146.991 94.832 147.116 91.824C147.179 88.816 147.273 85.3693 147.398 81.484C147.461 77.5987 147.555 73.5253 147.68 69.264C147.806 65.0027 147.9 60.6787 147.962 56.292C148.088 51.8427 148.182 47.5813 148.244 43.508C145.236 43.3827 142.322 43.32 139.502 43.32C136.682 43.2573 134.176 43.2887 131.982 43.414C131.669 43.414 131.544 43.2573 131.606 42.944C131.669 42.6307 131.826 42.3173 132.076 42.004C132.264 41.628 132.546 41.3147 132.922 41.064C133.236 40.8133 133.549 40.688 133.862 40.688C135.178 40.6253 136.62 40.5313 138.186 40.406C139.502 40.2807 141.038 40.1553 142.792 40.03C144.547 39.9047 146.396 39.748 148.338 39.56C148.338 36.8653 148.338 34.3273 148.338 31.946C148.401 29.5647 148.401 27.434 148.338 25.554C148.338 23.6113 148.307 21.9507 148.244 20.572C148.182 19.1933 148.119 18.1593 148.056 17.47C147.994 17.094 148.464 16.812 149.466 16.624C150.469 16.436 151.534 16.4047 152.662 16.53C153.853 16.5927 154.918 16.906 155.858 17.47C156.861 18.034 157.3 18.88 157.174 20.008C157.112 20.2587 157.018 22.1387 156.892 25.648C156.767 29.1573 156.61 33.5753 156.422 38.902C158.302 38.7767 160.057 38.6513 161.686 38.526C163.378 38.4007 164.851 38.3067 166.104 38.244C167.42 38.1187 168.454 38.0247 169.206 37.962C170.021 37.8993 170.46 37.868 170.522 37.868ZM165.24 68.888C165.177 67.0707 165.083 65.4413 164.958 64C164.833 62.496 164.707 61.1487 164.582 59.958C164.519 59.582 164.989 59.3 165.992 59.112C166.995 58.924 168.06 58.8927 169.188 59.018C170.379 59.0807 171.444 59.394 172.384 59.958C173.387 60.522 173.825 61.368 173.7 62.496C173.951 64.3133 173.982 66.6947 173.794 69.64C173.669 72.5853 173.481 75.7187 173.23 79.04C172.979 82.2987 172.76 85.5573 172.572 88.816C172.447 92.0747 172.541 95.02 172.854 97.652C173.167 100.221 173.794 102.258 174.734 103.762C175.737 105.266 177.209 105.861 179.152 105.548C180.468 105.36 181.596 104.545 182.536 103.104C183.539 101.6 184.353 99.8767 184.98 97.934C185.669 95.9913 186.233 94.0173 186.672 92.012C187.111 89.944 187.455 88.252 187.706 86.936C187.769 83.552 187.8 80.2933 187.8 77.16C187.8 73.964 187.8 71.0813 187.8 68.512C187.8 65.88 187.8 63.5927 187.8 61.65C187.863 59.6447 187.925 58.1093 187.988 57.044C187.988 56.668 188.427 56.5113 189.304 56.574C190.181 56.6367 191.121 56.8247 192.124 57.138C193.127 57.4513 194.035 57.89 194.85 58.454C195.665 58.9553 196.041 59.4253 195.978 59.864C195.978 60.1147 196.009 61.4933 196.072 64C196.135 66.444 196.166 69.64 196.166 73.588C196.229 77.536 196.229 81.9853 196.166 86.936C196.103 91.824 195.978 96.8373 195.79 101.976C195.602 107.115 195.289 112.097 194.85 116.922C194.474 121.81 193.941 126.165 193.252 129.988C192.688 133.184 191.779 135.753 190.526 137.696C189.335 139.701 187.957 141.237 186.39 142.302C184.886 143.367 183.288 144.088 181.596 144.464C179.967 144.84 178.431 145.028 176.99 145.028C174.546 145.091 172.509 144.621 170.88 143.618C169.251 142.615 167.935 141.331 166.932 139.764C165.929 138.26 165.209 136.568 164.77 134.688C164.331 132.871 164.018 131.116 163.83 129.424C163.705 127.732 163.705 126.259 163.83 125.006C163.893 123.815 163.955 123.063 164.018 122.75C164.143 122.249 164.676 121.779 165.616 121.34C166.556 120.901 167.559 120.557 168.624 120.306C169.752 120.055 170.723 119.93 171.538 119.93C172.353 119.93 172.729 120.118 172.666 120.494C172.29 123.189 171.977 125.821 171.726 128.39C171.475 131.022 171.507 133.341 171.82 135.346C172.196 137.414 172.917 139.043 173.982 140.234C175.047 141.487 176.708 142.051 178.964 141.926C180.468 141.863 181.721 140.579 182.724 138.072C183.727 135.628 184.541 132.432 185.168 128.484C185.857 124.536 186.359 120.024 186.672 114.948C187.048 109.872 187.33 104.702 187.518 99.438C186.954 100.942 186.233 102.446 185.356 103.95C184.541 105.391 183.57 106.676 182.442 107.804C181.314 108.932 180.029 109.841 178.588 110.53C177.147 111.219 175.549 111.564 173.794 111.564C171.35 111.501 169.439 110.718 168.06 109.214C166.681 107.647 165.647 105.642 164.958 103.198C164.331 100.691 163.955 97.9027 163.83 94.832C163.767 91.7613 163.83 88.6593 164.018 85.526C164.206 82.3927 164.425 79.3847 164.676 76.502C164.989 73.5567 165.177 71.0187 165.24 68.888ZM229.628 38.996C230.317 37.8053 231.477 37.022 233.106 36.646C234.735 36.2073 236.271 35.988 237.712 35.988C237.775 33.92 237.994 31.7267 238.37 29.408C238.746 27.0893 239.31 24.7707 240.062 22.452C240.814 20.1333 241.785 17.94 242.976 15.872C244.167 13.7413 245.671 11.83 247.488 10.138C249.368 8.446 251.561 7.06733 254.068 6.00199C256.575 4.87399 259.52 4.18466 262.904 3.93399C268.983 3.49533 274.247 4.62333 278.696 7.318C283.145 9.94999 286.843 13.6473 289.788 18.41C292.733 23.11 294.927 28.6247 296.368 34.954C297.809 41.2833 298.561 47.8947 298.624 54.788C298.624 59.864 298.248 65.0027 297.496 70.204C296.807 75.4053 295.71 80.45 294.206 85.338C292.765 90.1633 290.979 94.738 288.848 99.062C286.717 103.323 284.242 107.146 281.422 110.53C278.665 113.851 275.594 116.577 272.21 118.708C268.826 120.839 265.16 122.155 261.212 122.656C255.823 123.345 250.966 122.781 246.642 120.964C242.381 119.209 238.652 116.546 235.456 112.974C232.26 109.465 229.628 105.266 227.56 100.378C225.492 95.4273 224.051 90.1633 223.236 84.586C221.983 76.5647 221.732 68.7 222.484 60.992C223.236 53.284 225.617 45.952 229.628 38.996ZM238.182 47.174C238.057 46.5473 237.931 45.6387 237.806 44.448C237.743 43.2573 237.681 41.8473 237.618 40.218C236.553 42.098 235.519 44.636 234.516 47.832C233.513 50.9653 232.636 54.506 231.884 58.454C231.132 62.3393 230.568 66.4753 230.192 70.862C229.816 75.186 229.753 79.51 230.004 83.834C230.192 88.534 230.913 92.9833 232.166 97.182C233.419 101.381 235.174 105.078 237.43 108.274C239.749 111.407 242.631 113.883 246.078 115.7C249.525 117.58 253.567 118.489 258.204 118.426C261.024 118.363 263.719 117.486 266.288 115.794C268.857 114.102 271.207 111.783 273.338 108.838C275.531 105.83 277.474 102.352 279.166 98.404C280.921 94.3933 282.425 90.0693 283.678 85.432C284.931 80.732 285.871 75.844 286.498 70.768C287.187 65.692 287.563 60.5847 287.626 55.446C287.689 49.3047 287.281 43.32 286.404 37.492C285.527 31.6013 284.085 26.4 282.08 21.888C280.137 17.376 277.599 13.8353 274.466 11.266C271.333 8.63399 267.541 7.47466 263.092 7.788C262.591 7.85066 261.776 8.13266 260.648 8.63399C259.52 9.07266 258.267 9.856 256.888 10.984C255.572 12.0493 254.193 13.522 252.752 15.402C251.373 17.282 250.183 19.6633 249.18 22.546C248.177 25.366 247.425 28.7813 246.924 32.792C246.485 36.8027 246.517 41.5027 247.018 46.892C247.582 52.908 248.616 58.2033 250.12 62.778C251.687 67.3527 253.316 71.238 255.008 74.434C256.763 77.5673 258.392 80.074 259.896 81.954C261.463 83.7713 262.559 84.9933 263.186 85.62C263.562 85.996 263.343 86.3407 262.528 86.654C261.776 86.9673 260.805 87.218 259.614 87.406C258.486 87.594 257.389 87.7193 256.324 87.782C255.259 87.782 254.632 87.688 254.444 87.5C253.943 86.936 252.94 85.62 251.436 83.552C249.995 81.4213 248.397 78.6327 246.642 75.186C244.95 71.7393 243.289 67.666 241.66 62.966C240.093 58.266 238.934 53.002 238.182 47.174ZM312.007 70.956C312.571 69.3893 313.26 67.854 314.075 66.35C314.952 64.7833 315.955 63.4047 317.083 62.214C318.274 60.9607 319.59 59.958 321.031 59.206C322.535 58.454 324.196 58.1093 326.013 58.172C328.332 58.2347 330.149 58.9867 331.465 60.428C332.844 61.8067 333.878 63.624 334.567 65.88C335.256 68.136 335.664 70.7053 335.789 73.588C335.914 76.408 335.914 79.322 335.789 82.33C335.664 85.2753 335.444 88.1893 335.131 91.072C334.88 93.9547 334.692 96.524 334.567 98.78C334.442 101.036 334.442 102.885 334.567 104.326C334.692 105.767 335.1 106.519 335.789 106.582C337.042 106.77 338.233 106.363 339.361 105.36C340.489 104.295 341.492 102.947 342.369 101.318C343.246 99.626 344.061 97.8087 344.813 95.866C345.565 93.9233 346.192 92.106 346.693 90.414C347.257 88.6593 347.696 87.218 348.009 86.09C348.322 84.962 348.573 84.398 348.761 84.398C348.949 84.398 349.419 84.4607 350.171 84.586C350.986 84.6487 351.393 84.8367 351.393 85.15C351.393 86.09 351.205 87.406 350.829 89.098C350.516 90.79 349.983 92.6387 349.231 94.644C348.542 96.6493 347.664 98.686 346.599 100.754C345.596 102.822 344.374 104.671 342.933 106.3C341.554 107.929 339.988 109.245 338.233 110.248C336.541 111.188 334.661 111.533 332.593 111.282C330.776 111.094 329.397 110.248 328.457 108.744C327.58 107.24 326.984 105.329 326.671 103.01C326.358 100.691 326.232 98.0907 326.295 95.208C326.358 92.2627 326.483 89.3173 326.671 86.372C326.859 83.4267 326.984 80.5753 327.047 77.818C327.11 74.998 326.953 72.554 326.577 70.486C326.264 68.3553 325.637 66.726 324.697 65.598C323.82 64.4073 322.441 63.9373 320.561 64.188C319.12 64.4387 317.866 65.4413 316.801 67.196C315.798 68.9507 314.952 70.956 314.263 73.212C313.636 75.4053 313.104 77.5673 312.665 79.698C312.289 81.8287 311.976 83.364 311.725 84.304C311.6 90.0067 311.568 95.02 311.631 99.344C311.694 103.668 311.913 107.146 312.289 109.778C312.352 110.154 311.882 110.436 310.879 110.624C309.939 110.812 308.874 110.875 307.683 110.812C306.492 110.687 305.427 110.342 304.487 109.778C303.547 109.214 303.14 108.368 303.265 107.24C303.265 107.052 303.328 105.423 303.453 102.352C303.578 99.2813 303.704 95.3333 303.829 90.508H303.735C303.923 85.056 304.048 80.7007 304.111 77.442C304.174 74.1207 304.174 71.426 304.111 69.358C304.048 67.29 303.954 65.5667 303.829 64.188C303.704 62.8093 303.516 61.274 303.265 59.582C303.202 59.206 303.641 58.924 304.581 58.736C305.521 58.548 306.555 58.5167 307.683 58.642C308.874 58.7047 309.939 59.018 310.879 59.582C311.882 60.146 312.352 60.992 312.289 62.12L312.007 70.956ZM370.881 4.40399C371.507 4.27866 372.541 4.09066 373.983 3.83999C375.424 3.52666 376.834 3.30732 378.213 3.18199C379.654 3.05666 380.845 3.05666 381.785 3.18199C382.725 3.24466 383.007 3.558 382.63 4.12199C382.443 4.43533 382.161 6.06466 381.785 9.01C381.471 11.8927 381.158 15.6213 380.845 20.196C380.531 24.7707 380.312 29.9093 380.187 35.612C380.061 41.3147 380.093 47.1113 380.281 53.002C380.531 58.8927 381.001 64.6267 381.691 70.204C382.38 75.7813 383.383 80.7007 384.699 84.962C386.015 89.2233 387.707 92.6073 389.775 95.114C391.905 97.6207 394.506 98.7487 397.577 98.498C402.026 98.122 405.661 96.4613 408.481 93.516C411.363 90.5707 413.619 86.8107 415.249 82.236C416.941 77.6613 418.1 72.5227 418.727 66.82C419.353 61.0547 419.635 55.2267 419.573 49.336C419.573 43.4453 419.291 37.7113 418.727 32.134C418.225 26.494 417.63 21.512 416.941 17.188C416.314 12.8013 415.687 9.32333 415.061 6.75399C414.434 4.122 413.995 2.83733 413.745 2.89999C415.374 2.77466 416.847 2.71199 418.163 2.71199C419.291 2.71199 420.356 2.80599 421.359 2.994C422.424 3.11933 423.113 3.43266 423.427 3.93399C423.552 4.18466 423.897 5.59466 424.461 8.16399C425.025 10.7333 425.589 14.086 426.153 18.222C426.779 22.358 427.312 27.058 427.751 32.322C428.252 37.586 428.503 43.038 428.503 48.678C428.816 54.2553 428.847 60.146 428.597 66.35C428.409 72.554 427.97 78.852 427.281 85.244C426.654 91.636 425.777 97.9967 424.649 104.326C423.583 110.655 422.33 116.703 420.889 122.468C422.017 124.912 423.019 127.481 423.897 130.176C424.837 132.871 425.62 135.503 426.247 138.072C426.936 140.641 427.531 143.054 428.033 145.31C428.534 147.566 428.941 149.477 429.255 151.044L420.983 157.06C421.484 152.548 421.515 147.973 421.077 143.336C420.701 138.761 419.917 134.5 418.727 130.552C417.223 135.816 415.562 140.61 413.745 144.934C411.99 149.321 410.11 153.049 408.105 156.12C406.162 159.191 404.125 161.509 401.995 163.076C399.864 164.705 397.671 165.332 395.415 164.956C393.347 164.643 391.467 163.577 389.775 161.76C388.083 160.005 386.641 157.749 385.451 154.992C384.26 152.297 383.351 149.258 382.725 145.874C382.161 142.49 381.91 139.043 381.973 135.534C382.098 132.087 382.599 128.703 383.477 125.382C384.417 122.123 385.827 119.209 387.707 116.64C389.587 114.071 391.937 112.034 394.757 110.53C397.639 108.963 401.086 108.211 405.097 108.274C406.851 108.337 408.449 108.713 409.891 109.402C411.395 110.091 412.805 111.063 414.121 112.316C414.622 109.245 415.092 106.143 415.531 103.01C416.032 99.814 416.502 96.5867 416.941 93.328C414.434 96.336 411.426 98.7173 407.917 100.472C404.407 102.164 400.24 103.041 395.415 103.104C391.216 103.104 387.613 101.725 384.605 98.968C381.597 96.148 379.059 92.4507 376.991 87.876C374.985 83.2387 373.387 77.9747 372.197 72.084C371.006 66.1933 370.129 60.1773 369.565 54.036C369.001 47.8947 368.718 41.8787 368.718 35.988C368.656 30.0347 368.718 24.7393 368.907 20.102C369.157 15.4647 369.471 11.7047 369.847 8.822C370.223 5.93933 370.567 4.46666 370.881 4.40399ZM396.073 160.914C397.514 161.102 398.955 160.131 400.397 158C401.901 155.932 403.373 152.987 404.815 149.164C406.256 145.341 407.635 140.829 408.951 135.628C410.329 130.427 411.614 124.818 412.805 118.802C411.489 117.298 410.016 116.17 408.387 115.418C406.757 114.729 405.034 114.541 403.217 114.854C400.773 115.23 398.705 116.17 397.013 117.674C395.321 119.241 393.942 121.121 392.877 123.314C391.874 125.507 391.122 127.92 390.621 130.552C390.182 133.247 389.931 135.973 389.869 138.73C389.869 141.487 390.025 144.182 390.339 146.814C390.715 149.446 391.185 151.765 391.749 153.77C392.313 155.838 392.971 157.499 393.723 158.752C394.475 160.068 395.258 160.789 396.073 160.914ZM433.486 59.018C433.862 58.9553 434.489 58.9867 435.366 59.112C436.243 59.1747 437.089 59.3627 437.904 59.676C438.781 59.9893 439.533 60.4907 440.16 61.18C440.787 61.8067 441.069 62.684 441.006 63.812C440.943 64.0627 440.849 65.2533 440.724 67.384C440.599 69.452 440.442 72.0213 440.254 75.092C440.129 78.1 439.972 81.3273 439.784 84.774C439.659 88.2207 439.565 91.4167 439.502 94.362C439.439 97.2447 439.439 99.6887 439.502 101.694C439.565 103.637 439.753 104.608 440.066 104.608C440.755 104.671 441.445 104.201 442.134 103.198C442.886 102.195 443.607 100.942 444.296 99.438C444.985 97.934 445.612 96.3047 446.176 94.55C446.803 92.7953 447.367 91.166 447.868 89.662C448.369 88.158 448.745 86.9047 448.996 85.902C449.309 84.8993 449.497 84.398 449.56 84.398C449.623 84.398 449.779 84.4293 450.03 84.492C450.343 84.492 450.657 84.5233 450.97 84.586C451.283 84.586 451.565 84.6487 451.816 84.774C452.067 84.8367 452.192 84.962 452.192 85.15C452.192 85.2753 452.004 85.996 451.628 87.312C451.315 88.628 450.845 90.2573 450.218 92.2C449.654 94.08 448.902 96.148 447.962 98.404C447.085 100.597 446.082 102.634 444.954 104.514C443.826 106.331 442.573 107.867 441.194 109.12C439.815 110.311 438.374 110.875 436.87 110.812C435.805 110.812 434.896 110.499 434.144 109.872C433.455 109.183 432.891 108.399 432.452 107.522C432.076 106.645 431.763 105.736 431.512 104.796C431.324 103.856 431.199 103.104 431.136 102.54C431.073 102.164 431.073 100.848 431.136 98.592C431.199 96.2733 431.293 93.516 431.418 90.32C431.481 87.0613 431.606 83.6147 431.794 79.98C431.982 76.3453 432.17 72.9927 432.358 69.922C432.546 66.7887 432.734 64.2193 432.922 62.214C433.11 60.146 433.298 59.0807 433.486 59.018ZM431.7 44.072C431.7 41.9413 432.264 40.124 433.392 38.62C434.583 37.116 435.993 36.364 437.622 36.364C439.251 36.364 440.63 37.116 441.758 38.62C442.886 40.124 443.45 41.9413 443.45 44.072C443.45 46.2027 442.886 48.02 441.758 49.524C440.63 51.028 439.251 51.78 437.622 51.78C435.993 51.78 434.583 51.028 433.392 49.524C432.264 48.02 431.7 46.2027 431.7 44.072ZM462.511 58.172C465.018 57.9213 467.055 58.548 468.621 60.052C470.251 61.556 471.504 63.4673 472.381 65.786C473.321 68.1047 473.917 70.6113 474.167 73.306C474.481 76.0007 474.543 78.4447 474.355 80.638C473.917 85.338 473.008 89.0353 471.629 91.73C470.313 94.4247 468.809 96.4927 467.117 97.934C465.488 99.3127 463.827 100.19 462.135 100.566C460.443 100.942 459.096 101.13 458.093 101.13C458.971 103.511 460.005 105.109 461.195 105.924C462.386 106.676 463.263 106.989 463.827 106.864C465.457 106.739 466.961 106.237 468.339 105.36C469.718 104.42 470.94 103.261 472.005 101.882C473.133 100.441 474.105 98.874 474.919 97.182C475.797 95.49 476.549 93.8293 477.175 92.2C477.802 90.5707 478.272 89.0667 478.585 87.688C478.961 86.2467 479.243 85.1187 479.431 84.304C479.557 83.9907 480.027 83.8653 480.841 83.928C481.656 83.928 482.126 84.2413 482.251 84.868C482.251 85.056 482.095 85.8393 481.781 87.218C481.468 88.534 480.967 90.1633 480.277 92.106C479.588 93.986 478.711 96.0227 477.645 98.216C476.58 100.347 475.295 102.352 473.791 104.232C472.35 106.049 470.658 107.616 468.715 108.932C466.835 110.185 464.736 110.875 462.417 111C460.349 111.125 458.563 110.781 457.059 109.966C455.555 109.089 454.302 107.992 453.299 106.676C452.297 105.297 451.451 103.793 450.761 102.164C450.135 100.472 449.665 98.874 449.351 97.37C449.038 95.8033 448.819 94.456 448.693 93.328C448.568 92.1373 448.505 91.3227 448.505 90.884C448.505 90.0067 448.537 88.628 448.599 86.748C448.662 84.868 448.819 82.7687 449.069 80.45C449.383 78.0687 449.821 75.6247 450.385 73.118C451.012 70.5487 451.858 68.1987 452.923 66.068C453.989 63.8747 455.273 62.0573 456.777 60.616C458.344 59.1747 460.255 58.36 462.511 58.172ZM456.683 90.508C456.621 92.2 456.652 93.7353 456.777 95.114C456.903 96.4927 457.091 97.7147 457.341 98.78C458.093 98.8427 459.033 98.7487 460.161 98.498C461.352 98.2473 462.511 97.558 463.639 96.43C464.767 95.2393 465.77 93.4533 466.647 91.072C467.525 88.6907 468.089 85.3693 468.339 81.108C468.653 74.2773 468.308 69.2953 467.305 66.162C466.303 62.966 464.799 61.556 462.793 61.932C462.167 62.0573 461.603 62.6527 461.101 63.718C460.6 64.7833 460.099 66.162 459.597 67.854C459.159 69.4833 458.751 71.332 458.375 73.4C458.062 75.4053 457.78 77.4733 457.529 79.604C457.279 81.672 457.059 83.6773 456.871 85.62C456.746 87.5 456.683 89.1293 456.683 90.508ZM495.434 17C497.753 16.4987 499.602 16.718 500.98 17.658C502.422 18.5353 503.456 19.914 504.082 21.794C504.772 23.6113 505.179 25.8047 505.304 28.374C505.43 30.8807 505.367 33.45 505.116 36.082C504.866 38.714 504.521 41.3147 504.082 43.884C503.644 46.3907 503.205 48.5527 502.766 50.37C501.701 55.0073 500.448 58.9867 499.006 62.308C497.628 65.6293 496.218 68.4493 494.776 70.768C493.335 73.0867 491.925 74.9353 490.546 76.314C489.23 77.63 488.071 78.6327 487.068 79.322C486.943 82.0793 486.88 84.962 486.88 87.97C486.943 90.9153 487.162 93.6727 487.538 96.242C487.977 98.7487 488.604 100.848 489.418 102.54C490.296 104.232 491.455 105.141 492.896 105.266C495.027 105.517 496.813 104.953 498.254 103.574C499.696 102.133 500.918 100.284 501.92 98.028C502.923 95.772 503.8 93.328 504.552 90.696C505.304 88.064 506.056 85.62 506.808 83.364C506.996 82.8627 507.31 82.5493 507.748 82.424C508.187 82.2987 508.626 82.33 509.064 82.518C509.503 82.6433 509.848 82.894 510.098 83.27C510.412 83.5833 510.506 83.928 510.38 84.304C509.19 88.0013 508.03 91.5107 506.902 94.832C505.774 98.1533 504.49 101.067 503.048 103.574C501.67 106.018 500.009 107.961 498.066 109.402C496.186 110.843 493.836 111.47 491.016 111.282C489.011 111.157 487.131 110.311 485.376 108.744C483.684 107.177 482.243 104.702 481.052 101.318C479.862 97.934 479.016 93.516 478.514 88.064C478.013 82.612 478.044 75.9693 478.608 68.136C478.734 66.5067 478.953 64.188 479.266 61.18C479.58 58.1093 480.018 54.7567 480.582 51.122C481.146 47.4873 481.867 43.7587 482.744 39.936C483.622 36.0507 484.656 32.51 485.846 29.314C487.1 26.0553 488.51 23.298 490.076 21.042C491.643 18.786 493.429 17.4387 495.434 17ZM488.196 67.572C488.071 68.136 487.914 69.0447 487.726 70.298C487.601 71.5513 487.476 72.9927 487.35 74.622C488.165 73.87 489.042 72.8673 489.982 71.614C490.985 70.298 491.988 68.7 492.99 66.82C494.056 64.8773 495.09 62.59 496.092 59.958C497.095 57.2633 498.035 54.1613 498.912 50.652C499.852 47.0173 500.542 43.414 500.98 39.842C501.419 36.27 501.638 33.1367 501.638 30.442C501.638 27.6847 501.419 25.5227 500.98 23.956C500.542 22.3893 499.852 21.7627 498.912 22.076C498.098 22.3893 497.314 23.4547 496.562 25.272C495.81 27.0893 495.09 29.3453 494.4 32.04C493.711 34.7347 493.084 37.7427 492.52 41.064C491.956 44.3227 491.424 47.6127 490.922 50.934C490.421 54.1927 489.92 57.2947 489.418 60.24C488.98 63.1227 488.572 65.5667 488.196 67.572ZM529.197 17.47C529.134 17.094 529.573 16.812 530.513 16.624C531.516 16.436 532.612 16.4047 533.803 16.53C534.994 16.5927 536.059 16.906 536.999 17.47C537.939 18.034 538.378 18.88 538.315 20.008C538.315 20.196 538.252 21.5433 538.127 24.05C538.002 26.5567 537.876 29.8153 537.751 33.826C537.626 37.8367 537.469 42.38 537.281 47.456C537.156 52.4693 537.03 57.608 536.905 62.872C536.78 68.0733 536.654 73.1807 536.529 78.194C536.404 83.2073 536.341 87.688 536.341 91.636C536.341 95.5213 536.372 98.6547 536.435 101.036C536.498 103.417 536.623 104.608 536.811 104.608C537.5 104.671 538.19 104.201 538.879 103.198C539.631 102.195 540.352 100.942 541.041 99.438C541.73 97.934 542.388 96.3047 543.015 94.55C543.642 92.7953 544.174 91.166 544.613 89.662C545.114 88.158 545.49 86.9047 545.741 85.902C546.054 84.8993 546.242 84.398 546.305 84.398C546.368 84.398 546.524 84.4293 546.775 84.492C547.088 84.492 547.402 84.5233 547.715 84.586C548.028 84.586 548.31 84.6487 548.561 84.774C548.812 84.8367 548.937 84.962 548.937 85.15C548.937 85.2753 548.749 85.996 548.373 87.312C548.06 88.628 547.59 90.2573 546.963 92.2C546.399 94.08 545.647 96.148 544.707 98.404C543.83 100.597 542.827 102.634 541.699 104.514C540.571 106.331 539.318 107.867 537.939 109.12C536.56 110.311 535.119 110.875 533.615 110.812C531.986 110.812 530.764 110.217 529.949 109.026C529.134 107.773 528.57 106.488 528.257 105.172C527.38 106.676 526.408 107.835 525.343 108.65C524.278 109.402 523.244 109.966 522.241 110.342C521.238 110.655 520.33 110.843 519.515 110.906C518.7 110.906 518.105 110.875 517.729 110.812C516.852 110.749 515.692 110.467 514.251 109.966C512.81 109.402 511.4 108.305 510.021 106.676C508.642 104.984 507.452 102.54 506.449 99.344C505.509 96.148 505.07 91.824 505.133 86.372C505.196 81.672 505.603 77.724 506.355 74.528C507.17 71.2693 508.141 68.606 509.269 66.538C510.397 64.47 511.65 62.872 513.029 61.744C514.408 60.5533 515.724 59.7073 516.977 59.206C518.293 58.7047 519.421 58.4227 520.361 58.36C521.364 58.2347 522.084 58.172 522.523 58.172C524.09 58.2347 525.374 58.7673 526.377 59.77C527.442 60.7727 528.288 61.838 528.915 62.966C529.04 57.9527 529.134 52.9707 529.197 48.02C529.322 43.0693 529.416 38.526 529.479 34.39C529.542 30.1913 529.542 26.6193 529.479 23.674C529.416 20.666 529.322 18.598 529.197 17.47ZM527.975 97.652C528.038 94.7067 528.132 90.696 528.257 85.62C528.445 80.544 528.633 74.8413 528.821 68.512C528.696 67.76 528.414 67.008 527.975 66.256C527.599 65.4413 527.16 64.752 526.659 64.188C526.158 63.5613 525.594 63.06 524.967 62.684C524.403 62.2453 523.839 62.026 523.275 62.026C522.084 62.026 521.019 62.496 520.079 63.436C519.202 64.3133 518.418 65.504 517.729 67.008C517.04 68.4493 516.444 70.0787 515.943 71.896C515.504 73.6507 515.128 75.4053 514.815 77.16C514.564 78.9147 514.345 80.544 514.157 82.048C514.032 83.552 513.938 84.7427 513.875 85.62C513.75 86.8733 513.718 88.6593 513.781 90.978C513.906 93.2967 514.188 95.6153 514.627 97.934C515.066 100.253 515.755 102.258 516.695 103.95C517.635 105.579 518.951 106.363 520.643 106.3C521.834 106.3 522.836 106.018 523.651 105.454C524.466 104.827 525.124 104.107 525.625 103.292C526.189 102.415 526.628 101.506 526.941 100.566C527.317 99.5633 527.63 98.6233 527.881 97.746L527.975 97.652ZM558.413 56.856C560.293 56.668 561.922 56.7933 563.301 57.232C564.679 57.6707 565.87 58.2973 566.873 59.112C567.875 59.864 568.69 60.7413 569.317 61.744C570.006 62.7467 570.507 63.7493 570.821 64.752C571.197 65.7547 571.447 66.6947 571.573 67.572C571.698 68.3867 571.729 69.0133 571.667 69.452C571.541 70.3293 571.165 71.332 570.539 72.46C569.912 73.588 569.223 74.5907 568.471 75.468C567.719 76.2827 566.998 76.8467 566.309 77.16C565.682 77.4107 565.275 77.16 565.087 76.408C564.961 75.9067 564.93 75.1233 564.993 74.058C565.118 72.9927 565.212 71.8333 565.275 70.58C565.4 69.3267 565.431 68.042 565.369 66.726C565.369 65.41 565.181 64.2507 564.805 63.248C564.429 62.2453 563.833 61.462 563.019 60.898C562.204 60.2713 561.076 60.052 559.635 60.24C558.82 60.3653 558.193 60.8353 557.755 61.65C557.316 62.4647 557.034 63.436 556.909 64.564C556.783 65.6293 556.752 66.7573 556.815 67.948C556.877 69.076 557.034 70.016 557.285 70.768C557.849 72.7733 558.82 74.6533 560.199 76.408C561.577 78.1627 563.05 79.98 564.617 81.86C566.183 83.6773 567.656 85.5887 569.035 87.594C570.413 89.5367 571.385 91.73 571.949 94.174C572.262 95.3647 572.325 96.9313 572.137 98.874C572.011 100.754 571.447 102.634 570.445 104.514C569.442 106.394 567.938 108.023 565.933 109.402C563.927 110.781 561.264 111.533 557.943 111.658C555.248 111.783 552.961 111.47 551.081 110.718C549.201 109.903 547.665 108.838 546.475 107.522C545.284 106.143 544.407 104.608 543.843 102.916C543.216 101.161 542.809 99.4067 542.621 97.652C542.433 95.8347 542.401 94.1113 542.527 92.482C542.589 90.79 542.746 89.3173 542.997 88.064C543.373 86.184 544.125 84.774 545.253 83.834C546.443 82.894 547.603 82.3613 548.731 82.236C549.921 82.048 550.893 82.2047 551.645 82.706C552.397 83.2073 552.553 83.928 552.115 84.868C551.049 86.9987 550.423 89.3173 550.235 91.824C550.047 94.3307 550.203 96.712 550.705 98.968C551.206 101.224 552.052 103.167 553.243 104.796C554.433 106.363 555.875 107.271 557.567 107.522C558.757 107.71 559.823 107.553 560.763 107.052C561.765 106.551 562.58 105.861 563.207 104.984C563.896 104.044 564.397 103.01 564.711 101.882C565.024 100.691 565.118 99.5633 564.993 98.498C564.742 96.4927 563.896 94.4247 562.455 92.294C561.013 90.1633 559.415 88.064 557.661 85.996C555.969 83.8653 554.277 81.7973 552.585 79.792C550.955 77.7867 549.796 75.8753 549.107 74.058C548.417 72.3033 548.073 70.4547 548.073 68.512C548.135 66.5693 548.543 64.7833 549.295 63.154C550.109 61.5247 551.269 60.146 552.773 59.018C554.277 57.8273 556.157 57.1067 558.413 56.856Z" fill="#122110"/>
        </svg>

        <p className={styles.subheading}>Where <span className={styles.green}>DeFi</span> Meets <span className={styles.green}>Safety</span></p>
        <div className={styles.buttonBlock}>
          <button className={styles.button}>
            <span>
              Launch Soy Finance
            </span>
            <span className={styles.icon}>
              <Svg iconName="arrow-right" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className={styles.videoWrapper}>
      <video poster="/videos/poster.webp" loop muted playsInline autoPlay>
        <source src="/videos/BG_VP9.mp4" type="video/mp4;codecs=hvc1" />
        <source src="/videos/BG_VP9.webm"  type="video/webm" />
      </video>
    </div>
  </div>;
}
