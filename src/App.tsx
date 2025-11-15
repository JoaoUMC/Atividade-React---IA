import { useState } from "react";
import "./App.css";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre o Projeto" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "equipe", label: "Equipe" },
  { id: "contato", label: "Contato" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* HEADER / NAVBAR */}
      <header className="header">
        <div className="container header-content">
          <div
            className="logo"
            onClick={() => scrollToSection("inicio")}
            aria-label="Voltar ao início"
          >
            <span className="logo-mark">IC</span>
            <span className="logo-text">InfoCrypto</span>
          </div>

          {/* Navegação desktop */}
          <nav className="nav desktop-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Alternar menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Navegação mobile */}
        {menuOpen && (
          <nav className="nav mobile-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="section hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="hero-tag">Projeto Final de Curso • Sistemas de Informação</p>
              <h1>
                InfoCrypto:
                <span> educação e monitoramento</span> em criptomoedas
              </h1>
              <p className="hero-subtitle">
                Uma plataforma web que reúne conteúdo educacional, painel de cotações
                em tempo real, notícias com apoio de IA e fórum de eventos para
                ajudar usuários a tomar decisões mais conscientes no mercado cripto.
              </p>

              <div className="hero-actions">
                <a
                  href="#sobre"
                  className="btn btn-primary"
                >
                  Ver visão geral do PFC
                </a>
                <a
                  href="#contato"
                  className="btn btn-outline"
                >
                  Como acessar o sistema
                </a>
              </div>

              <div className="hero-meta">
                <span>Universidade de Mogi das Cruzes (UMC)</span>
                <span>Orientador: Prof. Alessandro Aparecido da Silva</span>
                <span>Entrega prevista: 2025</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hero-chip">Protótipo do sistema</span>
                <h2>Painel InfoCrypto</h2>
                <p>
                  Exemplo da tela inicial: resumo do mercado, principais criptomoedas,
                  variação em 24h e destaques de notícias.
                </p>
              </div>

              <div className="hero-widget">
                <div className="widget-row widget-header">
                  <span>Cripto</span>
                  <span>Preço (R$)</span>
                  <span>24h</span>
                </div>
                <div className="widget-row">
                  <span>Bitcoin (BTC)</span>
                  <span>R$ 350.000,00</span>
                  <span className="chip-positive">+3,2%</span>
                </div>
                <div className="widget-row">
                  <span>Ethereum (ETH)</span>
                  <span>R$ 18.500,00</span>
                  <span className="chip-neutral">+0,4%</span>
                </div>
                <div className="widget-row">
                  <span>Solana (SOL)</span>
                  <span>R$ 780,00</span>
                  <span className="chip-negative">-1,1%</span>
                </div>
              </div>

              <p className="hero-card-footer">
                Os dados acima são ilustrativos e representam o tipo de informação
                que o sistema exibe em tempo real.
              </p>
            </div>
          </div>
        </section>

        {/* SOBRE O PROJETO */}
        <section id="sobre" className="section">
          <div className="container section-content">
            <div className="section-header">
              <h2>Sobre o projeto InfoCrypto</h2>
              <p>
                O InfoCrypto é um PFC/TCC desenvolvido no curso de Bacharelado em
                Sistemas de Informação com o objetivo de aproximar usuários iniciantes
                e intermediários do universo das criptomoedas, oferecendo informação
                organizada, visual e confiável.
              </p>
            </div>

            <div className="grid two-columns">
              <div className="card">
                <h3>Problema</h3>
                <p>
                  O mercado de criptomoedas é marcado por alta volatilidade e excesso
                  de informação dispersa em diferentes fontes. Muitos usuários tomam
                  decisões apenas com base em redes sociais, sem uma visão consolidada
                  de preços, notícias e riscos.
                </p>
              </div>

              <div className="card">
                <h3>Solução proposta</h3>
                <p>
                  O sistema integra cotações em tempo quase real, notícias
                  classificadas com apoio de IA, módulos educacionais e uma área de
                  eventos/fórum. Assim, o usuário tem um ponto central para aprender,
                  acompanhar o mercado e discutir acontecimentos relevantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES */}
        <section id="funcionalidades" className="section section-alt">
          <div className="container section-content">
            <div className="section-header">
              <h2>Principais funcionalidades</h2>
              <p>
                A plataforma foi pensada para cobrir tanto a parte educacional quanto
                o acompanhamento diário do mercado cripto.
              </p>
            </div>

            <div className="grid three-columns">
              <div className="card">
                <h3>Painel de cotações</h3>
                <p>
                  Lista de criptomoedas com preço, variação, volume e gráfico
                  simplificado, permitindo favoritar ativos para acompanhamento
                  rápido.
                </p>
              </div>

              <div className="card">
                <h3>Notícias com IA</h3>
                <p>
                  Notícias categorizadas automaticamente com apoio de IA em
                  &ldquo;Confiável&rdquo;, &ldquo;Checar&rdquo; ou
                  &ldquo;Duvidosa&rdquo;, ajudando o usuário a avaliar melhor as
                  fontes.
                </p>
              </div>

              <div className="card">
                <h3>Módulo educacional</h3>
                <p>
                  Conteúdos introdutórios sobre blockchain, carteiras, segurança,
                  riscos e boas práticas para quem está começando no mercado
                  cripto.
                </p>
              </div>

              <div className="card">
                <h3>Fórum de eventos</h3>
                <p>
                  Espaço para publicação de eventos, anúncios e discussões com
                  possibilidade de like/dislike e classificação de relevância.
                </p>
              </div>

              <div className="card">
                <h3>Simulador BIP39</h3>
                <p>
                  Ferramenta para demonstrar, de forma educativa, como funcionam
                  frases-semente (seed phrase) e a importância da segurança no
                  armazenamento.
                </p>
              </div>

              <div className="card">
                <h3>Perfil do usuário</h3>
                <p>
                  Área de conta com cadastro, login, alteração de senha, termos de
                  uso, favoritos e personalização básica de preferências.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section id="tecnologias" className="section">
          <div className="container section-content">
            <div className="section-header">
              <h2>Tecnologias utilizadas</h2>
              <p>
                O InfoCrypto foi construído com foco em boas práticas de
                desenvolvimento web, separando front-end, back-end e banco de dados.
              </p>
            </div>

            <div className="grid two-columns tech-grid">
              <div className="card">
                <h3>Front-end</h3>
                <ul className="tag-list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Vite (protótipo desta landing page)</li>
                  <li>Tailwind CSS / Shadcn UI (no projeto principal)</li>
                </ul>
              </div>

              <div className="card">
                <h3>Back-end</h3>
                <ul className="tag-list">
                  <li>FastAPI (Python)</li>
                  <li>PostgreSQL (Supabase)</li>
                  <li>APIs de mercado cripto</li>
                  <li>Serviços de e-mail</li>
                  <li>Integrações com IA para classificação</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="section section-alt">
          <div className="container section-content">
            <div className="section-header">
              <h2>Equipe do projeto</h2>
              <p>
                Trabalho desenvolvido por alunos do curso de Sistemas de Informação
                da UMC, com orientação docente contínua.
              </p>
            </div>

            <div className="grid four-columns team-grid">
              <div className="card team-card">
                <h3>Fernando Barbosa Moura</h3>
                <p>Desenvolvimento full stack, documentações e coordenação geral.</p>
              </div>
              <div className="card team-card">
                <h3>João Vitor Bonifácio de Almeida</h3>
                <p>Desenvolvimento, testes e apoio na arquitetura de software.</p>
              </div>
              <div className="card team-card">
                <h3>Gustavo Fernandes Silva</h3>
                <p>Front-end, UX/UI e suporte ao módulo educacional.</p>
              </div>
              <div className="card team-card">
                <h3>Demais colaboradores</h3>
                <p>Participação em pesquisa, revisão e validação do projeto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO / ACESSO */}
        <section id="contato" className="section">
          <div className="container section-content">
            <div className="section-header">
              <h2>Acesso e contato</h2>
              <p>
                Esta página é uma apresentação resumida do PFC/TCC. A versão completa
                do sistema InfoCrypto está disponível em ambiente web.
              </p>
            </div>

            <div className="grid two-columns">
              <div className="card">
                <h3>Acessar o sistema</h3>
                <p>
                  O link para o sistema principal e para o repositório oficial será
                  disponibilizado no relatório do PFC e na apresentação final.
                </p>
                <p className="muted">
                  Nesta atividade específica, o foco é a landing page feita em
                  React + Vite, publicada na Vercel.
                </p>
              </div>

              <div className="card">
                <h3>Contato do autor</h3>
                <p>
                  Em caso de dúvidas sobre o projeto, entre em contato pelo e-mail:
                </p>
                <p>
                  <a href="mailto:feguboni@gmail.com" className="link">
                    feguboni@gmail.com
                  </a>
                </p>
                <p>
                  ou consulte o orientador do trabalho, Prof. Alessandro Aparecido da
                  Silva, pelos canais institucionais da UMC.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} InfoCrypto • PFC em Sistemas de Informação</span>
          <span className="muted">
            Esta página foi desenvolvida com suporte de IA como parte da disciplina de React.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
