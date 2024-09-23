import BlogBanner from "../components/blog/BlogBanner";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";

function BlogDetailsPage() {
  return (
    <Layout>
      <Head>
        <title>Termos e Condições | Transformamos Ideias em Inovação.</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Leia nossos Termos de Uso para entender as condições que regem 
          o uso de nossos serviços. Ao acessar nosso site, você concorda com estas diretrizes."
        />
        <meta
          name="keywords"
          content="termos de uso, condições de serviço, política de uso, direitos 
          e responsabilidades, uso do site"
        ></meta>
      </Head>
      <Breadcrumb
        pageList="Detalhes"
        title="Termos e Condições"
        pageName="DETALHES"
      />
      <div className="bolog-details-area sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-12">
              <div className="termos-details-content">
                <div className="author-and-meta">
                  <ul className="blog-meta">
                    <li>
                      Esta política é efetiva a partir de 21 September 2024
                      06:36
                    </li>
                  </ul>
                </div>
                <h3>
                  <span>1. Termos</span>
                </h3>
                <p>
                  <span>
                    Ao acessar ao site <a href="#">BigMinds Tech</a>, concorda
                    em cumprir estes termos de serviço, todas as leis e
                    regulamentos aplicáveis ​​e concorda que é responsável pelo
                    cumprimento de todas as leis locais aplicáveis. Se você não
                    concordar com algum desses termos, está proibido de usar ou
                    acessar este site. Os materiais contidos neste site são
                    protegidos pelas leis de direitos autorais e marcas
                    comerciais aplicáveis.
                  </span>
                </p>
                <h3>
                  <span>2. Uso de Licença</span>
                </h3>
                <p>
                  <span>
                    É concedida permissão para baixar temporariamente uma cópia
                    dos materiais (informações ou software) no site BigMinds
                    Tech , apenas para visualização transitória pessoal e não
                    comercial. Esta é a concessão de uma licença, não uma
                    transferência de título e, sob esta licença, você não
                    pode:&nbsp;
                  </span>
                </p>

                <li>
                  <span>modificar ou copiar os materiais;&nbsp;</span>
                </li>
                <li>
                  <span>
                    usar os materiais para qualquer finalidade comercial ou para
                    exibição pública (comercial ou não comercial);&nbsp;
                  </span>
                </li>
                <li>
                  <span>
                    tentar descompilar ou fazer engenharia reversa de qualquer
                    software contido no site BigMinds Tech;&nbsp;
                  </span>
                </li>
                <li>
                  <span>
                    remover quaisquer direitos autorais ou outras notações de
                    propriedade dos materiais; ou&nbsp;
                  </span>
                </li>
                <li>
                  <span>
                    transferir os materiais para outra pessoa ou 'espelhe' os
                    materiais em qualquer outro servidor.
                  </span>
                </li>
                <br />
                <p>
                  <span>
                    Esta licença será automaticamente rescindida se você violar
                    alguma dessas restrições e poderá ser rescindida por
                    BigMinds Tech a qualquer momento. Ao encerrar a visualização
                    desses materiais ou após o término desta licença, você deve
                    apagar todos os materiais baixados em sua posse, seja em
                    formato eletrónico ou impresso.
                  </span>
                </p>
                <h3>
                  <span>3. Isenção de responsabilidade</span>
                </h3>

                <li>
                  <span>
                    Os materiais no site da BigMinds Tech são fornecidos 'como
                    estão'. BigMinds Tech não oferece garantias, expressas ou
                    implícitas, e, por este meio, isenta e nega todas as outras
                    garantias, incluindo, sem limitação, garantias implícitas ou
                    condições de comercialização, adequação a um fim específico
                    ou não violação de propriedade intelectual ou outra violação
                    de direitos.
                  </span>
                </li>
                <li>
                  <span>
                    Além disso, o BigMinds Tech não garante ou faz qualquer
                    representação relativa à precisão, aos resultados prováveis
                    ​​ou à confiabilidade do uso dos materiais em seu site ou de
                    outra forma relacionado a esses materiais ou em sites
                    vinculados a este site.
                  </span>
                </li>
                <br />
                <h3>
                  <span>4. Limitações</span>
                </h3>
                <p>
                  <span>
                    Em nenhum caso o BigMinds Tech ou seus fornecedores serão
                    responsáveis ​​por quaisquer danos (incluindo, sem
                    limitação, danos por perda de dados ou lucro ou devido a
                    interrupção dos negócios) decorrentes do uso ou da
                    incapacidade de usar os materiais em BigMinds Tech, mesmo
                    que BigMinds Tech ou um representante autorizado da BigMinds
                    Tech tenha sido notificado oralmente ou por escrito da
                    possibilidade de tais danos. Como algumas jurisdições não
                    permitem limitações em garantias implícitas, ou limitações
                    de responsabilidade por danos conseqüentes ou incidentais,
                    essas limitações podem não se aplicar a você.
                  </span>
                </p>
                <h3>
                  <span>5. Precisão dos materiais</span>
                </h3>
                <p>
                  <span>
                    Os materiais exibidos no site da BigMinds Tech podem incluir
                    erros técnicos, tipográficos ou fotográficos. BigMinds Tech
                    não garante que qualquer material em seu site seja preciso,
                    completo ou atual. BigMinds Tech pode fazer alterações nos
                    materiais contidos em seu site a qualquer momento, sem aviso
                    prévio. No entanto, BigMinds Tech não se compromete a
                    atualizar os materiais.
                  </span>
                </p>
                <h3>
                  <span>6. Links</span>
                </h3>
                <p>
                  <span>
                    O BigMinds Tech não analisou todos os sites vinculados ao
                    seu site e não é responsável pelo conteúdo de nenhum site
                    vinculado. A inclusão de qualquer link não implica endosso
                    por BigMinds Tech do site. O uso de qualquer site vinculado
                    é por conta e risco do usuário.
                  </span>
                </p>
                <p>
                  <br />
                </p>
                <h3>Modificações</h3>
                <p>
                  <span>
                    O BigMinds Tech pode revisar estes termos de serviço do site
                    a qualquer momento, sem aviso prévio. Ao usar este site,
                    você concorda em ficar vinculado à versão atual desses
                    termos de serviço.
                  </span>
                </p>
                <blockquote>
                  <h3>Lei aplicável</h3>
                  <p>
                    Estes termos e condições são regidos e interpretados de
                    acordo com as leis do BigMinds Tech e você se submete
                    irrevogavelmente à jurisdição exclusiva dos tribunais
                    naquele estado ou localidade.
                  </p>
                  <div className="bolckquote-icons">
                    <img
                      className="blockquote-icon-01"
                      src="assets/img/inner-pages/blockquote-icon-01.svg"
                      alt=""
                    />
                    <img
                      className="blockquote-icon-02"
                      src="assets/img/inner-pages/blockquote-icon-02.svg"
                      alt=""
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetailsPage;
